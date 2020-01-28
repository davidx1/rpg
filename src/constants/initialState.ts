import { PlaceableTypes } from '../interfaces/Placeable'
import Tile from '../interfaces/Tile'
import Things from '../interfaces/Things'
import Player from '../interfaces/Player'
import Npc from '../interfaces/Npc'
import { default as MoveStatus } from '../interfaces/MovementSpriteStatus'
import { default as TileSprite } from '../interfaces/TileSpritePosition'
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

export const tiles: Tile[] = [...temp].map((t, index) => {
  return {
    type: PlaceableTypes.TILE,
    position: {
      x: index % (viewportWidth / blockSize),
      y: Math.floor(index / (viewportWidth / blockSize)),
    },
    spritePosition: TileSprite.GRASS1,
  }
})

export const path: Tile[] = [
  {
    type: PlaceableTypes.TILE,
    position: {
      x: 1,
      y: 1,
    },
    spritePosition: TileSprite.GRASS1,
  },
  {
    type: PlaceableTypes.TILE,
    position: {
      x: 2,
      y: 1,
    },
    spritePosition: TileSprite.GRASS1,
  },
  {
    type: PlaceableTypes.TILE,
    position: {
      x: 3,
      y: 1,
    },
    spritePosition: TileSprite.GRASS1,
  },
  {
    type: PlaceableTypes.TILE,
    position: {
      x: 3,
      y: 2,
    },
    spritePosition: TileSprite.GRASS1,
  },
  {
    type: PlaceableTypes.TILE,
    position: {
      x: 4,
      y: 2,
    },
    spritePosition: TileSprite.GRASS1,
  },
  {
    type: PlaceableTypes.TILE,
    position: {
      x: 4,
      y: 3,
    },
    spritePosition: TileSprite.GRASS1,
  },
  {
    type: PlaceableTypes.TILE,
    position: {
      x: 4,
      y: 4,
    },
    spritePosition: TileSprite.GRASS1,
  },
  {
    type: PlaceableTypes.TILE,
    position: {
      x: 4,
      y: 5,
    },
    spritePosition: TileSprite.GRASS1,
  },
]

export const things: Things[] = [
  { type: PlaceableTypes.THINGS, position: { x: 4, y: 6 } },
]
