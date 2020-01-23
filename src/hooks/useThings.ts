import { useState } from 'react'
import Things from '../interfaces/Things'

const useThings = (initialState: Things[]) => {
  const [thingsState] = useState(initialState)
  return { thingsState }
}

export default useThings
