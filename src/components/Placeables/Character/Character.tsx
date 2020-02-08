import styled from 'styled-components'
import PlaceableBase from '../PlaceableBase'
import { blockSize } from '../../../constants/sizes'
import playerSprite from '../../../asset/sprite/player.png'
import npcSprite from '../../../asset/sprite/npc.png'
import { PlaceableTypes } from '../../../interfaces/Placeable'

const Character = styled(PlaceableBase)`
  height: ${blockSize}px;
  width: ${blockSize}px;
  background-image: url(${props =>
    props.type === PlaceableTypes.PLAYER ? playerSprite : npcSprite});
`

export default Character
