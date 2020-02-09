import { default as MoveStatus } from '../interfaces/MovementSpriteStatus'
import { default as TileSprite } from '../interfaces/TileSpritePosition'
import Commands from '../interfaces/Commands'
import { viewportWidth, viewportHeight, blockSize } from './sizes'
import PlaceableTypes from '../interfaces/SpriteType'

export const player = {
  position: {
    x: 0,
    y: 2,
  },
  direction: Commands.DOWN,
  spritePosition: MoveStatus.DOWN_0,
  spriteIndex: 0,
}

export const npcs = [{ position: { x: 1, y: 4 } }]

let temp = new Array((viewportWidth * viewportHeight) / (blockSize * blockSize))

const grass = [...temp].map((t, index) => ({
  position: {
    x: index % (viewportWidth / blockSize),
    y: Math.floor(index / (viewportWidth / blockSize)),
  },
  type: PlaceableTypes.FLOOR_GRASS,
  variant: 1,
}))

const path = [
  [1, 1, PlaceableTypes.FLOOR_NOT_GRASS, 1],
  [2, 1, PlaceableTypes.FLOOR_NOT_GRASS, 1],
  [3, 1, PlaceableTypes.FLOOR_NOT_GRASS, 1],
  [4, 1, PlaceableTypes.FLOOR_NOT_GRASS, 1],
  [4, 2, PlaceableTypes.FLOOR_NOT_GRASS, 1],
  [4, 3, PlaceableTypes.FLOOR_NOT_GRASS, 1],
  [4, 4, PlaceableTypes.FLOOR_NOT_GRASS, 1],
  [4, 5, PlaceableTypes.FLOOR_NOT_GRASS, 1],
].map(c => ({
  position: {
    x: c[0],
    y: c[1],
  },
  type: c[2],
  variant: c[3],
}))

export const bottomLayer = grass.concat(path)

export const topLayer = [
  [1, 2, PlaceableTypes.TREE, 1],
  [3, 2, PlaceableTypes.TREE, 2],
  [5, 2, PlaceableTypes.TREE, 3],
  [7, 2, PlaceableTypes.TREE, 4],
].map(t => ({
  position: {
    x: t[0],
    y: t[1],
  },
  type: t[2],
  variant: t[3],
}))
