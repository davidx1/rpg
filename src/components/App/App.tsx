import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Viewport from '../Viewport'
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

  const topLayerToRender = [...topLayer, playerState]
  return (
    <Viewport onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={0}>
      <BottomLayer>
        {bottomLayer.map(t => {
          switch (t.type) {
            case SpriteType.FLOOR_GRASS:
              return (
                <Grass
                  key={'bGrass' + t.position.x + '-' + t.position.y}
                  {...t}
                />
              )
            case SpriteType.TREE:
              return (
                <Tree
                  key={'bTree' + t.position.x + '-' + t.position.y}
                  {...t}
                />
              )
          }
        })}
      </BottomLayer>
      <TopLayer>
        {topLayerToRender.map(t => {
          switch (t.type) {
            case SpriteType.FLOOR_GRASS:
              return (
                <Grass
                  key={'tGrass' + t.position.x + '-' + t.position.y}
                  {...t}
                />
              )
            case SpriteType.TREE:
              return (
                <Tree
                  key={'tTree' + t.position.x + '-' + t.position.y}
                  {...t}
                />
              )
            case SpriteType.PLAYER:
              return <Character key="player" {...playerState} />
          }
        })}
      </TopLayer>
    </Viewport>
  )
}

export default App

const BottomLayer = styled.div`
  position: relative;
  z-index: 5;
`

const TopLayer = styled.div`
  position: relative;
  z-index: 10;
`
