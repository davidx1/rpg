import styled from 'styled-components'
import PlaceableType from '../../interfaces/Placeable'
import { blockSize } from '../../constants/sizes'
import { gamecycle } from '../../constants/duration'

const Placeable = styled.div<PlaceableType>`
  position: absolute;
  transform: translate(
    ${({ position }) =>
      `${position.x * blockSize}px, calc(${(position.y + 1) *
        blockSize}px - 100%)`}
  );
  transition: transform ${gamecycle}ms linear;
`

export default Placeable
