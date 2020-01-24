import { PlaceableTypes } from '../interfaces/Placeable'
import Tile from '../interfaces/Tile'
import Things from '../interfaces/Things'
import Player from '../interfaces/Player'
import Npc from '../interfaces/Npc'

export const player: Player = {
  type: PlaceableTypes.PLAYER,
  position: {
    x: 0,
    y: 2,
  },
}

export const npcs: Npc[] = [
  { type: PlaceableTypes.NPC, position: { x: 1, y: 4 } },
]

export const tiles: Tile[] = [
  { type: PlaceableTypes.TILE, position: { x: 0, y: 0 } },
  { type: PlaceableTypes.TILE, position: { x: 1, y: 1 } },
  { type: PlaceableTypes.TILE, position: { x: 2, y: 2 } },
  { type: PlaceableTypes.TILE, position: { x: 3, y: 0 } },
]

export const things: Things[] = [
  { type: PlaceableTypes.THINGS, position: { x: 4, y: 6 } },
]
