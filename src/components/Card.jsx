import React from 'react'
import { Link, Button, LinkContainer, ToolTip} from './CardStyled';

function LinkCard(props) {
  return (
    <LinkContainer>
    <Link>
        <Button id ={props.id} href={props.href}>{props.text}</Button>
        
    </Link>
    <ToolTip className='tooltip'>{props.subtext}</ToolTip>
    </LinkContainer>
  )
}

export default LinkCard;