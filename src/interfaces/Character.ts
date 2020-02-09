import SpriteType from './SpriteType'
import MovementSpriteStatus from './MovementSpriteStatus'
import Commands from './Commands'
import Placeable from './Placeable'

export default interface Player extends Placeable {
  type: SpriteType
  variant: number
  direction: Commands
  spritePosition: MovementSpriteStatus
  spriteIndex: number
}
