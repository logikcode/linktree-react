import React from 'react'
import { Button, LinkWrapper} from './LinkContainerStyled';

function LinkContainer(props) {
  return (
   
    <LinkWrapper title={props.title}> 
        <Button id ={props.id} href={props.href} >{props.text} </Button>
    </LinkWrapper>
   
  )
}

export default LinkContainer;