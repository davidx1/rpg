import styled from 'styled-components'
import PlaceableBase from '../PlaceableBase'
import { blockSize } from '../../../constants/sizes'
import playerSprite from '../../../asset/sprite/player.png'

const Player = styled(PlaceableBase)`
  height: ${blockSize}px;
  width: ${blockSize}px;
  background-image: url(${playerSprite});
`

export default Player
