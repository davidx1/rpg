import styled from 'styled-components'
import PlaceableBase from '../PlaceableBase'
import { blockSize } from '../../../constants/sizes'
import base from '../../../asset/sprite/base.png'

const Tile = styled(PlaceableBase)`
  height: ${blockSize}px;
  width: ${blockSize}px;
  background-image: url(${base});
`

export default Tile
