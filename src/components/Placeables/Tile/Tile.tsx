import styled from 'styled-components'
import PlaceableBase from '../PlaceableBase'
import { blockSize } from '../../../constants/sizes'

const Tile = styled(PlaceableBase)`
  height: ${blockSize}px;
  width: ${blockSize}px;
  background-color: red;
`

export default Tile
