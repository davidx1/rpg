import React, { useEffect, useRef, useState } from 'react'
import Viewport from '../Viewport'
import Tile from '../Placeables/Tile'
import Tree from '../Placeables/Tree'
import Grass from '../Placeables/Grass'
import Character from '../Placeables/Character'

import useCommandState from '../../hooks/useCommandState'
import usePlayer from '../../hooks/usePlayer'
import useGameLoop from '../../hooks/useGameLoop'

import * as initialState from '../../constants/initialState'

import SpriteType from '../../interfaces/SpriteType'

const App: React.FC = () => {
  const { handleKeyDown, handleKeyUp, commandState } = useCommandState()

  const [bottomLayer, setBottomLayer] = useState(initialState.bottomLayer)
  const [topLayer, setTopLayer] = useState(initialState.topLayer)
  const { playerState, movePlayer, stopPlayer } = usePlayer(initialState.player)

  const movementKeyState = useRef(commandState.movement)

  useEffect(() => {
    movementKeyState.current = commandState.movement
  }, [commandState.movement])

  useGameLoop(() => {
    const len = movementKeyState.current.length
    if (len) {
      movePlayer(movementKeyState.current[len - 1], topLayer)
    } else {
      stopPlayer()
    }
  })

  const componentTypeMap = {
    [SpriteType.TREE]: Tree,
    [SpriteType.FLOOR_GRASS]: Grass,
  }
  return (
    <Viewport onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={0}>
      {bottomLayer.map(t => {
        return <Tile {...t} />
      })}
    </Viewport>
  )
}

export default App
