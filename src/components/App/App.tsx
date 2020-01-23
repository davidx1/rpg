import React, { useReducer, useEffect, useState, useRef } from 'react'
import Tile from '../Tile'
import Viewport from '../Viewport'
import Character from '../Character'
import Player from '../Player'
import useCommandState from '../../hooks/useCommandState'
import usePlayer from '../../hooks/usePlayer'
import useTiles from '../../hooks/useTiles'
import useGameLoop from '../../hooks/useGameLoop'
import * as initPos from '../../constants/initialPosition'

const App: React.FC = () => {
  const { handleKeyDown, handleKeyUp, commandState } = useCommandState()
  const { playerState, movePlayer } = usePlayer({ position: initPos.player })
  const { tilesState } = useTiles(
    initPos.tiles.map(coord => ({ position: coord }))
  )

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

  return (
    <Viewport onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={0}>
      {tilesState.map(t => {
        return <Tile {...t.position} />
      })}
      <Player {...playerState.position} />
    </Viewport>
  )
}

export default App
