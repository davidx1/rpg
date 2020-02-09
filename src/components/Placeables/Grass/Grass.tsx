import styled from 'styled-components'
import PlaceableBase from '../PlaceableBase'
import url from '../../../asset/sprite/base.png'

interface IGrass {
  variant: 'Spring' | 'Summer' | 'Autumn' | 'Bare'
}

const variantToSpritePositionMap = {
  Spring: '0 0',
  Summer: '-32px 0',
  Autumn: '-64px 0',
  Bare: '-96px 0',
}

const Grass = styled(PlaceableBase)<IGrass>`
  height: 64px;
  width: 64px;
  background: url(${url});
  background-position: ${({ variant }) => variantToSpritePositionMap[variant]};
`

export default Grass
