import styled from 'styled-components'
import Placeable from '../Placeable'
import { blockSize } from '../../constants/sizes'

const Player = styled(Placeable)`
  height: ${blockSize}px;
  width: ${blockSize}px;
  background-color: green;
`

export default Player
