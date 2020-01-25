import Coordinates from '../interfaces/Coordinates'
import Commands from '../interfaces/Commands'
import { viewportWidth, viewportHeight, blockSize } from '../constants/sizes'
import Placeable from '../interfaces/Placeable'

const checkCollision = (
  finalPosition: Coordinates,
  potentialColliders: Placeable[]
) => {
  const collideWithColliders = !!potentialColliders.find(
    c =>
      Math.abs(c.position.x - finalPosition.x) < 1 &&
      Math.abs(c.position.y - finalPosition.y) < 1
  )
  const collideWithWall =
    finalPosition.x < 0 ||
    finalPosition.y < 0 ||
    finalPosition.x > viewportWidth / blockSize - 1 ||
    finalPosition.y > viewportHeight / blockSize - 1

  return collideWithWall || collideWithColliders
}

const movePlaceable = (
  direction: Commands,
  currentCoordinate: Coordinates,
  moveBy: number = 0.5,
  potentialColliders: Placeable[]
) => {
  const prev = currentCoordinate
  switch (direction) {
    case Commands.UP: {
      const finalPosition = { ...prev, y: prev.y - moveBy }
      const isColliding = checkCollision(finalPosition, potentialColliders)
      return isColliding ? prev : finalPosition
    }
    case Commands.RIGHT: {
      const finalPosition = { ...prev, x: prev.x + moveBy }
      const isColliding = checkCollision(finalPosition, potentialColliders)
      return isColliding ? prev : finalPosition
    }
    case Commands.LEFT: {
      const finalPosition = { ...prev, x: prev.x - moveBy }
      const isColliding = checkCollision(finalPosition, potentialColliders)
      return isColliding ? prev : finalPosition
    }

    case Commands.DOWN: {
      const finalPosition = { ...prev, y: prev.y + moveBy }
      const isColliding = checkCollision(finalPosition, potentialColliders)
      return isColliding ? prev : finalPosition
    }
    default:
      return prev
  }
}

export default movePlaceable
