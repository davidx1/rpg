import React, { useEffect, useRef } from 'react'
import Viewport from '../Viewport'
import Tile from '../Placeables/Tile'
import Things from '../Placeables/Things'
import Character from '../Placeables/Character'

import useCommandState from '../../hooks/useCommandState'
import usePlayer from '../../hooks/usePlayer'
import useTiles from '../../hooks/useTiles'
import useThings from '../../hooks/useThings'
import useNpc from '../../hooks/useNpc'
import useGameLoop from '../../hooks/useGameLoop'

import * as initialState from '../../constants/initialState'

import Placeable, { PlaceableTypes } from '../../interfaces/Placeable'

const App: React.FC = () => {
  const { handleKeyDown, handleKeyUp, commandState } = useCommandState()

  const { tilesState } = useTiles(initialState.tiles)
  const { thingsState } = useThings(initialState.things)
  const { npcsState } = useNpc(initialState.npcs)
  const { playerState, movePlayer, stopPlayer } = usePlayer(initialState.player)

  const movementKeyState = useRef(commandState.movement)

  useEffect(() => {
    movementKeyState.current = commandState.movement
  }, [commandState.movement])

  useGameLoop(() => {
    const len = movementKeyState.current.length
    if (len) {
      const potentialCollider = [...thingsState, ...npcsState]
      movePlayer(movementKeyState.current[len - 1], potentialCollider)
    } else {
      stopPlayer()
    }
  })

  const toRender: Placeable[] = [
    ...thingsState,
    ...npcsState,
    playerState,
  ].sort((a, b) => a.position.y - b.position.y)

  return (
    <Viewport onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={0}>
      {tilesState.map(t => {
        return <Tile {...t} />
      })}
      {toRender.map(t => {
        switch (t.type) {
          case PlaceableTypes.TILE:
          case PlaceableTypes.THINGS:
            return <Things {...t} />
          case PlaceableTypes.NPC:
            return <Character {...t} />
          case PlaceableTypes.PLAYER:
            return (
              <Character
                key="player"
                spritePosition={playerState.spritePosition}
                {...t}
              />
            )
          default:
            return <h1>?</h1>
        }
      })}
    </Viewport>
  )
}

export default App
