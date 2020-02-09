import styled from 'styled-components'
import PlaceableBase from '../PlaceableBase'
import url from '../../../asset/sprite/base.png'

interface IGrass {
  variant: number
}

enum V {
  Spring = '0 0',
  Summer = '-32px 0',
  Autumn = '-64px 0',
  Bare = '-96px 0',
}

const variantArray = [V.Spring, V.Summer, V.Autumn, V.Bare]

const Grass = styled(PlaceableBase)<IGrass>`
  height: 32px;
  width: 32px;
  background: url(${url});
  background-position: ${({ variant }) => {
    if (variant >= variantArray.length) {
      throw 'No such variant in Grass.tsx'
    } else {
      return variantArray[variant]
    }
  }};
`

export default Grass
