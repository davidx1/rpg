import Coordinates from './Coordinates'
import { default as MoveStatus } from './MovementSpriteStatus'

export enum PlaceableTypes {
  'PLAYER',
  'TILE',
  'NPC',
  'THINGS',
}

interface Placeable {
  position: Coordinates
  type: PlaceableTypes
  spritePosition?: MoveStatus
}

export default Placeable
