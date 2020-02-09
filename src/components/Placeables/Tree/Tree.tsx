import styled from 'styled-components'
import PlaceableBase from '../PlaceableBase'
import url from '../../../asset/sprite/base.png'

interface ITree {
  variant: 'Spring' | 'Summer' | 'Autumn' | 'Bare'
}

const variantToSpritePositionMap = {
  Spring: '0 -32px',
  Summer: '-64px -32px',
  Autumn: '-128px -32px',
  Bare: '-192px -32px',
}

const Tree = styled(PlaceableBase)<ITree>`
  height: 64px;
  width: 64px;
  background: url(${url});
  background-position: ${({ variant }) => variantToSpritePositionMap[variant]};
`

export default Tree
