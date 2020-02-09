import Commands from '../interfaces/Commands'
import { useState } from 'react'
import movePlaceable from '../util/movePlaceable'

import { default as MoveStatus } from '../interfaces/MovementSpriteStatus'
import Placeable from '../interfaces/Placeable'
import Character from '../interfaces/Character'

const commandSpriteMap = {
  [Commands.RIGHT]: [
    MoveStatus.RIGHT_0,
    MoveStatus.RIGHT_1,
    MoveStatus.RIGHT_2,
    MoveStatus.RIGHT_3,
  ],
  [Commands.LEFT]: [
    MoveStatus.LEFT_0,
    MoveStatus.LEFT_1,
    MoveStatus.LEFT_2,
    MoveStatus.LEFT_3,
  ],
  [Commands.UP]: [
    MoveStatus.UP_0,
    MoveStatus.UP_1,
    MoveStatus.UP_2,
    MoveStatus.UP_3,
  ],
  [Commands.DOWN]: [
    MoveStatus.DOWN_0,
    MoveStatus.DOWN_1,
    MoveStatus.DOWN_2,
    MoveStatus.DOWN_3,
  ],
}

const usePlayer = (initialState: Character) => {
  const [playerState, setPlayerState] = useState(initialState)

  const movePlayer = (direction: Commands, potentialColliders: Placeable[]) => {
    setPlayerState(prevState => ({
      ...prevState,
      direction: direction,
      position: movePlaceable(
        direction,
        prevState.position,
        0.5,
        potentialColliders
      ),
      spritePosition:
        commandSpriteMap[direction][(prevState.spriteIndex + 1) % 4],
      spriteIndex: (prevState.spriteIndex + 1) % 4,
    }))
  }
  const stopPlayer = () => {
    setPlayerState(prevState => ({
      ...prevState,
      spritePosition: commandSpriteMap[prevState.direction][0],
      spriteIndex: 0,
    }))
  }
  return { playerState, movePlayer, stopPlayer }
}

export default usePlayer
