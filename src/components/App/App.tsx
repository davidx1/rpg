import React, { useReducer, useEffect, useState, useRef } from 'react'
import Viewport from '../Viewport'
import Tile from '../Tile'
import Npc from '../Npc'
import Things from '../Things'
import Player from '../Player'

import useCommandState from '../../hooks/useCommandState'
import usePlayer from '../../hooks/usePlayer'
import useTiles from '../../hooks/useTiles'
import useThings from '../../hooks/useThings'
import useNpc from '../../hooks/useNpc'
import useGameLoop from '../../hooks/useGameLoop'

import * as initPos from '../../constants/initialPosition'

import Placeable, { PlaceableTypes } from '../../interfaces/Placeable'
import Coordinates from '../../interfaces/Coordinates'

const App: React.FC = () => {
  const { handleKeyDown, handleKeyUp, commandState } = useCommandState()

  const { tilesState } = useTiles(
    initPos.tiles.map(coord => ({ type: PlaceableTypes.TILE, position: coord }))
  )
  const { thingsState } = useThings(
    initPos.things.map(coord => ({
      type: PlaceableTypes.THINGS,
      position: coord,
    }))
  )
  const { npcsState } = useNpc(
    initPos.npcs.map(coord => ({ type: PlaceableTypes.NPC, position: coord }))
  )

  const { playerState, movePlayer } = usePlayer({
    type: PlaceableTypes.PLAYER,
    position: initPos.player,
  })

  const movementKeyState = useRef(commandState.movement)

  useEffect(() => {
    movementKeyState.current = commandState.movement
  }, [commandState.movement])

  useGameLoop(() => {
    const len = movementKeyState.current.length
    if (len) {
      movePlayer(movementKeyState.current[len - 1])
    }
  })

  const toRender: Placeable[] = [
    ...tilesState,
    ...thingsState,
    ...npcsState,
    playerState,
  ].sort((a, b) => a.position.y - b.position.y)

  return (
    <Viewport onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={0}>
      {toRender.map(t => {
        const p = t.position
        switch (t.type) {
          case PlaceableTypes.TILE:
            return <Tile {...p} />
          case PlaceableTypes.THINGS:
            return <Things {...p} />
          case PlaceableTypes.NPC:
            return <Npc {...p} />
          case PlaceableTypes.PLAYER:
            return <Player key="player" {...p} />
          default:
            return <h1>?</h1>
        }
      })}
    </Viewport>
  )
}

export default App
