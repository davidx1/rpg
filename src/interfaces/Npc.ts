import Placeable, { PlaceableTypes } from './Placeable'

interface Npc extends Placeable {
  type: PlaceableTypes.NPC
}

export default Npc
