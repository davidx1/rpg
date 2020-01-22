import React, { useReducer, useEffect, useState, useRef } from 'react'
import Tile from '../Tile'
import Viewport from '../Viewport'
import Character from '../Character'
import Player from '../Player'
import useCommandState from '../../hooks/useCommandState'
import usePlayer from '../../hooks/usePlayer'
import useGameLoop from '../../hooks/useGameLoop'
import * as initPos from '../../constants/initialPosition'

const App: React.FC = () => {
  const { handleKeyDown, handleKeyUp, commandState } = useCommandState()
  const { playerState, movePlayer } = usePlayer({ position: initPos.player })
  useGameLoop(() => {})

  return (
    <Viewport onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={0}>
      {tilesToDisplay.map(t => {
        switch (t.type) {
          case 'c':
            return <Character key={t.x + ' ' + t.y} {...t} />
          case 't':
            return <Tile key={t.x + ' ' + t.y} {...t} />
          case 'p':
            return <Player key="player" {...t} />
        }
      })}
    </Viewport>
  )
}

export default App
