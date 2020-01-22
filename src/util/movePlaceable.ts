import Coordinates from '../interfaces/Coordinates'
import Commands from '../interfaces/Commands'

const movePlaceable = (direction: Commands, currentCoordinate: Coordinates) => {
  const prev = currentCoordinate
  switch (direction) {
    case Commands.UP:
      return { ...prev, y: prev.y - 1 }
    case Commands.RIGHT:
      return { ...prev, x: prev.x + 1 }
    case Commands.LEFT:
      return { ...prev, x: prev.x - 1 }
    case Commands.DOWN:
      return { ...prev, y: prev.y + 1 }
    default:
      return prev
  }
}

export default movePlaceable
