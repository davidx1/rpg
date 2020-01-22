import styled from 'styled-components'
import { viewportWidth, viewportHeight } from '../../constants/sizes'

const Viewport = styled.div`
  position: relative;
  margin: auto;
  width: ${viewportWidth}px;
  height: ${viewportHeight}px;
  border: 1px solid black;
`

export default Viewport
