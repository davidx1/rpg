import styled from 'styled-components'
import Placeable from '../Placeable'
import { blockSize } from '../../constants/sizes'

const Things = styled(Placeable)`
  height: ${blockSize * 1.5}px;
  width: ${blockSize * 2}px;
  background-color: yellow;
`

export default Things
