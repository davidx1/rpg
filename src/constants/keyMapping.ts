import Commands from '../interfaces/Commands'
export const movementMaps: { [key: string]: Commands } = {
  ArrowUp: Commands.UP,
  ArrowDown: Commands.DOWN,
  ArrowLeft: Commands.LEFT,
  ArrowRight: Commands.RIGHT,
}
