import { useState } from 'react'
import Tile from '../interfaces/Tile'

const useTiles = (initialState: Tile[]) => {
  const [tilesState] = useState(initialState)
  return { tilesState }
}

export default useTiles
