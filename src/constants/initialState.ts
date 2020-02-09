import { default as MoveStatus } from '../interfaces/MovementSpriteStatus'
import Commands from '../interfaces/Commands'
import { viewportWidth, viewportHeight, blockSize } from './sizes'
import SpriteType from '../interfaces/SpriteType'

import Character from '../interfaces/Character'

export const player: Character = {
  type: SpriteType.PLAYER,
  variant: 0,
  direction: Commands.DOWN,
  spritePosition: MoveStatus.DOWN_0,
  spriteIndex: 0,
  position: {
    x: 0,
    y: 2,
  },
}

export const npcs = [{ position: { x: 1, y: 4 } }]

let temp = new Array((viewportWidth * viewportHeight) / (blockSize * blockSize))

const grass = [...temp].map((t, index) => ({
  position: {
    x: index % (viewportWidth / blockSize),
    y: Math.floor(index / (viewportWidth / blockSize)),
  },
  type: SpriteType.FLOOR_GRASS,
  variant: 1,
}))

const path = [
  [1, 1, SpriteType.FLOOR_NOT_GRASS, 1],
  [2, 1, SpriteType.FLOOR_NOT_GRASS, 1],
  [3, 1, SpriteType.FLOOR_NOT_GRASS, 1],
  [4, 1, SpriteType.FLOOR_NOT_GRASS, 1],
  [4, 2, SpriteType.FLOOR_NOT_GRASS, 1],
  [4, 3, SpriteType.FLOOR_NOT_GRASS, 1],
  [4, 4, SpriteType.FLOOR_NOT_GRASS, 1],
  [4, 5, SpriteType.FLOOR_NOT_GRASS, 1],
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
  [1, 2, SpriteType.TREE, 0],
  [3, 3, SpriteType.TREE, 1],
  [5, 5, SpriteType.TREE, 2],
  [7, 2, SpriteType.TREE, 3],
].map(t => ({
  position: {
    x: t[0],
    y: t[1],
  },
  type: t[2],
  variant: t[3],
}))
