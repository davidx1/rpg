import Coordinates from './Coordinates'
import { Z_NO_COMPRESSION } from 'zlib'

export enum PlaceableTypes {
  'PLAYER',
  'TILE',
  'NPC',
  'THINGS',
}

interface Placeable {
  position: Coordinates
  type: PlaceableTypes
}

export default Placeable
