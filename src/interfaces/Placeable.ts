import Coordinates from './Coordinates'
import { default as MoveStatus } from './MovementSpriteStatus'
import { default as TilePosition } from './TileSpritePosition'

export enum PlaceableTypes {
  'PLAYER',
  'TILE',
  'NPC',
  'THINGS',
}

interface Placeable {
  position: Coordinates
  type: PlaceableTypes
  spritePosition?: MoveStatus | TilePosition
}

export default Placeable
