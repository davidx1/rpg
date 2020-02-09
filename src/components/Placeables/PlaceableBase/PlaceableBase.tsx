import styled from 'styled-components'
import PlaceableType from '../../../interfaces/Placeable'
import { blockSize } from '../../../constants/sizes'
import { gamecycle } from '../../../constants/duration'

const PlaceableBase = styled.div.attrs((props: PlaceableType) => ({
  style: {
    backgroundPosition: props.spritePosition,
    transform: `translate(${props.position.x * blockSize}px, calc(${(props
      .position.y +
      1) *
      blockSize}px - 100%)`,
  },
}))<PlaceableType>`
  position: absolute;
  transition: transform ${gamecycle}ms linear;
  z-index: ${props => props.position.y};
`

export default PlaceableBase
