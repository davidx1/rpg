import styled from 'styled-components'
import Placeable from '../Placeable'
import { blockSize } from '../../constants/sizes'

const Tile = styled(Placeable)`
  height: ${blockSize}px;
  width: ${blockSize}px;
  background-color: red;
`

export default Tile
