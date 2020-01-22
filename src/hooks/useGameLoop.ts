import { useEffect, useRef, useState } from 'react'
import { gamecycle } from '../constants/duration'
import movePlaceable from '../util/movePlaceable'

type PlaceableType = { x: number; y: number; type?: string }

const useGameLoop = (callback: Function) => {
  useEffect(() => {
    setInterval(() => {
      callback()
    }, gamecycle)
  }, [])
}

export default useGameLoop
