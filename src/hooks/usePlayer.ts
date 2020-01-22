import Player from '../interfaces/Player'
import Commands from '../interfaces/Commands'
import { useState } from 'react'
import movePlaceable from '../util/movePlaceable'

const usePlayer = (initialState: Player) => {
  const [playerState, setPlayerState] = useState(initialState)
  const movePlayer = (direction: Commands) => {
    const newPos = movePlaceable(direction, playerState.position)
    setPlayerState({ ...playerState, position: newPos })
  }
  return { playerState, movePlayer }
}

export default usePlayer
