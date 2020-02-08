import { PlaceableTypes } from '../interfaces/Placeable'
import Tile from '../interfaces/Tile'
import Things from '../interfaces/Things'
import Player from '../interfaces/Player'
import Npc from '../interfaces/Npc'
import { default as MoveStatus } from '../interfaces/MovementSpriteStatus'
import { default as TileSprite } from '../interfaces/TileSpritePosition'
import { default as ThingSprite } from '../interfaces/ThingsSpritePosition'
import Commands from '../interfaces/Commands'
import { viewportWidth, viewportHeight, blockSize } from './sizes'

export const player: Player = {
  type: PlaceableTypes.PLAYER,
  position: {
    x: 0,
    y: 2,
  },
  direction: Commands.DOWN,
  spritePosition: MoveStatus.DOWN_0,
  spriteIndex: 0,
}

export const npcs: Npc[] = [
  { type: PlaceableTypes.NPC, position: { x: 1, y: 4 } },
]

let temp = new Array((viewportWidth * viewportHeight) / (blockSize * blockSize))

const grass: Tile[] = [...temp].map((t, index) => {
  return {
    type: PlaceableTypes.TILE,
    position: {
      x: index % (viewportWidth / blockSize),
      y: Math.floor(index / (viewportWidth / blockSize)),
    },
    spritePosition: TileSprite.GRASS1,
  }
})

const path: Tile[] = [
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 4],
  [4, 5],
].map(c => ({
  type: PlaceableTypes.TILE,
  position: {
    x: c[0],
    y: c[1],
  },
  spritePosition: TileSprite.PATH1,
}))

export const tiles: Tile[] = grass.concat(path)

export const things: Things[] = [
  {
    type: PlaceableTypes.THINGS,
    spritePosition: ThingSprite.TREE1,
    position: { x: 1, y: 1 },
  },
  {
    type: PlaceableTypes.THINGS,
    spritePosition: ThingSprite.TREE2,
    position: { x: 3, y: 3 },
  },
  {
    type: PlaceableTypes.THINGS,
    spritePosition: ThingSprite.TREE3,
    position: { x: 4, y: 4 },
  },
  {
    type: PlaceableTypes.THINGS,
    spritePosition: ThingSprite.TREE4,
    position: { x: 5, y: 5 },
  },
]
