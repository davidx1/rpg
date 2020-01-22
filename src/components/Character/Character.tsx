import styled from 'styled-components'
import Placeable from '../Placeable'
import { blockSize } from '../../constants/sizes'

const Character = styled(Placeable)`
  height: ${blockSize}px;
  width: ${blockSize}px;
  background-color: blue;
`

export default Character
