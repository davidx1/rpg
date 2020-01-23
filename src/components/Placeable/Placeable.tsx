import styled from 'styled-components'
import Coordinates from '../../interfaces/Coordinates'
import { blockSize } from '../../constants/sizes'
import { gamecycle } from '../../constants/duration'

const Placeable = styled.div<Coordinates>`
  position: absolute;
  transform: translate(
    ${({ x, y }) => `${x * blockSize}px, calc(${(y + 1) * blockSize}px - 100%)`}
  );
  transition: transform ${gamecycle}ms linear;
`

export default Placeable
