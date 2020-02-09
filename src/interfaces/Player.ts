import Placeable from './Placeable'
import Commands from './Commands'
import MovementSpriteStatus from './MovementSpriteStatus'

interface Player extends Placeable {
  direction: Commands
  spritePosition: MovementSpriteStatus
  spriteIndex: number
}

export default Player
