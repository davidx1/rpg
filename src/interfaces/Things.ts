import Placeable, { PlaceableTypes } from './Placeable'

interface Npc extends Placeable {
  type: PlaceableTypes.THINGS
}

export default Npc
