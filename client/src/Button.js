import styled from 'styled-components'
import { NORM_BACK_COLOR, NORMTEXT_COLOR, MARGIN_LEFT, WARN_BACK_COLOR, ALT_COLOR, MAIN_COLOR, FONT_SIZE, WARNTEXT_COLOR, BORDER_RADIUS, MAIN_X} from './styles'

const Button = styled.button`
background: ${props => props.primary ? NORM_BACK_COLOR : ALT_COLOR} ;
color: ${props => props.primary ? NORMTEXT_COLOR : MAIN_COLOR} ;
font-size: ${FONT_SIZE};
margin-left: ${MARGIN_LEFT} ;
border: 3px solid ${MAIN_X};
border-radius: ${BORDER_RADIUS};

// &:hover {
//   background: ;
//   color: ;
//   cursor: ;
// }
`

export default Button