import styled from 'styled-components'
import PlaceableBase from '../PlaceableBase'
import url from '../../../asset/sprite/base.png'

interface ITree {
  variant: number
}

enum V {
  Spring = '0 -32px',
  Summer = '-64px -32px',
  Autumn = '-128px -32px',
  Bare = '-192px -32px',
}

const variantArray = [V.Spring, V.Summer, V.Autumn, V.Bare]

const Tree = styled(PlaceableBase)<ITree>`
  height: 64px;
  width: 64px;
  background: url(${url});
  background-position: ${({ variant }) => {
    if (variant >= variantArray.length) {
      throw `Variant ${variant} requested, but no such variant in Tree.tsx. `
    } else {
      return variantArray[variant]
    }
  }};
`

export default Tree
