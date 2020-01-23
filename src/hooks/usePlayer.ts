import Player from '../interfaces/Player'
import Commands from '../interfaces/Commands'
import { useState } from 'react'
import movePlaceable from '../util/movePlaceable'

const usePlayer = (initialState: Player) => {
  const [playerState, setPlayerState] = useState(initialState)
  const movePlayer = (direction: Commands) => {
    setPlayerState(prevState => ({
      ...prevState,
      position: movePlaceable(direction, prevState.position),
    }))
  }
  return { playerState, movePlayer }
}

export default usePlayer
