import styled from 'styled-components'
import Placeable from '../Placeable'
import { blockSize } from '../../constants/sizes'

const Npc = styled(Placeable)`
  height: ${blockSize * 1.25}px;
  width: ${blockSize * 0.75}px;
  margin: 0 ${blockSize * 0.125}px;
  background-color: blue;
`

export default Npc
