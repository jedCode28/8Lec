import styled from 'styled-components';
import {ALERTTEXT_COLOR, ALERT_BACK_COLOR, NORMTEXT_COLOR, NORM_BACK_COLOR, PADDING, WARNTEXT_COLOR, WARN_BACK_COLOR} from '../styles';

const textColor = (props) => {
  if (props.type === 'alert'){
    return ALERTTEXT_COLOR;
  } else if (props.type === 'warn'){
    return WARNTEXT_COLOR;
  } else {
    return NORMTEXT_COLOR;
  }
}

const backColor = (props) =>{
  if(props.type === 'alert'){
    return ALERT_BACK_COLOR;
  } else if (props.type === 'warn'){
    return WARN_BACK_COLOR;
  } else {
    return NORM_BACK_COLOR ; 
  }
}

const ErrMsg = styled.div`
  color: ${(props) => textColor(props)};
  border: 5px solid ${(props) => !props.noBackground ? textColor(props) : 'light-gray'}  ;
  background: ${(props) => !props.noBackground ? backColor(props) : 'light-blue'};
  padding: ${(props) => !props.noBackground ? PADDING: '0px'};
  border-radius: ;
`

export default ErrMsg