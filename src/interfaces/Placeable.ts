import Coordinates from './Coordinates'
import { default as MoveStatus } from './MovementSpriteStatus'
import { default as TilePosition } from './TileSpritePosition'

export enum PlaceableTypes {
  'PLAYER',
  'TILE',
  'NPC',
  'THINGS',
}

export enum ThingsSubtypes {
  'HUT_WOOD_SMALL',
  'HUT_WOOD_LARGE',
  'HUT_WOOD_MID1',
  'HUT_WOOD_MID2',
  'HUT_TILE_SMALL',
  'HUT_TILE_LARGE',
  'HUT_TILE_MID1',
  'HUT_TILE_MID2',
  '',
}

interface Placeable {
  position: Coordinates
  type: PlaceableTypes
  spritePosition?: MoveStatus | TilePosition
}

export default Placeable
