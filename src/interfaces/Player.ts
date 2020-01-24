import Placeable, { PlaceableTypes } from './Placeable'
import Commands from './Commands'
import MovementSpriteStatus from './MovementSpriteStatus'

interface Player extends Placeable {
  direction: Commands
  spritePosition: MovementSpriteStatus
  type: PlaceableTypes.PLAYER
  spriteIndex: number
}

export default Player
