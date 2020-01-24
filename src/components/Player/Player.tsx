import styled from 'styled-components'
import Placeable from '../Placeable'
import { blockSize } from '../../constants/sizes'
import playerSprite from '../../asset/sprite/player.png'

const Player = styled(Placeable)`
  height: ${blockSize}px;
  width: ${blockSize}px;
  background-image: url(${playerSprite});
`

export default Player
