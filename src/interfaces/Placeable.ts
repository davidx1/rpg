import Coordinates from './Coordinates'

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
