import styled from 'styled-components'
import PlaceableBase from '../PlaceableBase'
import { blockSize } from '../../../constants/sizes'
import url from '../../../asset/sprite/base.png'

const Things = styled(PlaceableBase)`
  height: ${blockSize * 2}px;
  width: ${blockSize * 2}px;
  background-color: yellow;
  background: url(${url});
  background-position: ;
`

export default Things
