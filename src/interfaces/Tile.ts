import Placeable, { PlaceableTypes } from './Placeable'

interface Tile extends Placeable {
  type: PlaceableTypes.TILE
}

export default Tile
