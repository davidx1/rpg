import Placeable, { PlaceableTypes } from './Placeable'

interface Player extends Placeable {
  type: PlaceableTypes.PLAYER
}

export default Player
