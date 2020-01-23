import { useState } from 'react'
import Npc from '../interfaces/Npc'

const useNpc = (initialState: Npc[]) => {
  const [npcsState] = useState(initialState)
  return { npcsState }
}

export default useNpc
