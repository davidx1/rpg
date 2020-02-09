import styled from 'styled-components'
import PlaceableBase from '../PlaceableBase'
import { blockSize } from '../../../constants/sizes'
import playerSprite from '../../../asset/sprite/player.png'
import npcSprite from '../../../asset/sprite/npc.png'

interface ICharacter {
  variant: 'Player' | 'Npc'
}

const Character = styled(PlaceableBase)<ICharacter>`
  height: ${blockSize}px;
  width: ${blockSize}px;
  background-image: url(${props =>
    props.variant === 'Player' ? playerSprite : npcSprite});
`

export default Character
