import { useEffect } from 'react'
import { gamecycle } from '../constants/duration'

const useGameLoop = (callback: Function) => {
  useEffect(() => {
    setInterval(() => {
      callback()
    }, gamecycle)
  }, [])
}

export default useGameLoop
