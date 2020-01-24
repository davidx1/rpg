import styled from 'styled-components'
import Placeable from '../Placeable'
import { blockSize } from '../../constants/sizes'
import playerSprite from '../../asset/sprite/player.png'
import React, { useState, useRef, useReducer, useEffect } from 'react'
import Commands from '../../interfaces/Commands'
import { default as MoveStatus } from '../../interfaces/MovementSpriteStatus'
import PlaceableType from '../../interfaces/Placeable'

const Player = styled(Placeable)`
  height: ${blockSize}px;
  width: ${blockSize}px;
  background-image: url(${playerSprite});
`

interface PlayerType extends PlaceableType {
  moveCommand: Commands
}

const moveAnimationReducer = (
  state: MoveStatus,
  action: { type: Commands | undefined; payload: number }
) => {
  const rightArray = [
    MoveStatus.RIGHT_0,
    MoveStatus.RIGHT_1,
    MoveStatus.RIGHT_2,
    MoveStatus.RIGHT_3,
  ]
  const leftArray = [
    MoveStatus.LEFT_0,
    MoveStatus.LEFT_1,
    MoveStatus.LEFT_2,
    MoveStatus.LEFT_3,
  ]
  const upArray = [
    MoveStatus.UP_0,
    MoveStatus.UP_1,
    MoveStatus.UP_2,
    MoveStatus.UP_3,
  ]
  const downArray = [
    MoveStatus.DOWN_0,
    MoveStatus.DOWN_1,
    MoveStatus.DOWN_2,
    MoveStatus.DOWN_3,
  ]

  switch (action.type) {
    case Commands.UP:
      return upArray[action.payload]
    case Commands.DOWN:
      return downArray[action.payload]
    case Commands.LEFT:
      return leftArray[action.payload]
    case Commands.RIGHT:
      return rightArray[action.payload]
    default:
      return MoveStatus.DOWN_0
  }
}

const PlayerWrapper = ({ moveCommand, ...props }: PlayerType) => {
  const [spriteStatus, dispatch] = useReducer(
    moveAnimationReducer,
    MoveStatus.DOWN_0
  )
  const [index, setIndex] = useState(0)
  const [id, setId] = useState(0)
  const indexRef = useRef(index)
  const moveCommandRef = useRef(moveCommand)
  useEffect(() => {
    moveCommandRef.current = moveCommand
    indexRef.current = index
  }, [moveCommand, index])
  if (!moveCommand && id) {
    clearInterval(id)
    setId(0)
    dispatch({ type: undefined, payload: 0 })
  } else if (moveCommand && !id) {
    dispatch({ type: moveCommand, payload: indexRef.current })
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % 4)
      dispatch({ type: moveCommandRef.current, payload: indexRef.current })
    }, 125)
    setId(id)
  }

  return <Player spritePosition={spriteStatus} {...props}></Player>
}

export default PlayerWrapper
