import styled from 'styled-components'
import PlaceableBase from '../PlaceableBase'
import { blockSize } from '../../../constants/sizes'

const Things = styled(PlaceableBase)`
  height: ${blockSize * 1.5}px;
  width: ${blockSize * 2}px;
  background-color: yellow;
`

export default Things
