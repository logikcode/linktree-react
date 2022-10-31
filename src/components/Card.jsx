import React from 'react'
import { Link, Button, LinkContainer, ToolTip} from './CardStyled';

function LinkCard(props) {
  return (
    <LinkContainer>
    <Link title={props.title}> 
        <Button id ={props.id} href={props.href} >{props.text} </Button>
    </Link>
    </LinkContainer>
  )
}

export default LinkCard;