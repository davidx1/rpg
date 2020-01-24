import Coordinates from '../interfaces/Coordinates'
import Commands from '../interfaces/Commands'
import { viewportWidth, viewportHeight, blockSize } from '../constants/sizes'

const movePlaceable = (
  direction: Commands,
  currentCoordinate: Coordinates,
  moveBy: number = 0.5
) => {
  console.log(
    `moving placeable from ${currentCoordinate.x}, ${currentCoordinate.y}`
  )
  const prev = currentCoordinate
  switch (direction) {
    case Commands.UP:
      return { ...prev, y: prev.y > 0 ? prev.y - moveBy : 0 }
    case Commands.RIGHT:
      return {
        ...prev,
        x:
          prev.x < viewportWidth / blockSize - 1
            ? prev.x + moveBy
            : viewportWidth / blockSize - 1,
      }
    case Commands.LEFT:
      return { ...prev, x: prev.x > 0 ? prev.x - moveBy : 0 }
    case Commands.DOWN:
      return {
        ...prev,
        y:
          prev.y < viewportHeight / blockSize - 1
            ? prev.y + moveBy
            : viewportHeight / blockSize - 1,
      }
    default:
      return prev
  }
}

export default movePlaceable
