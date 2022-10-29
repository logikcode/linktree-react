import React from 'react'
import { Link, Button } from './CardStyled';

function LinkCard(props) {
  return (
    <Link>
        <Button id ={props.id} href={props.href}>{props.text}</Button>
    
    </Link>
  )
}

export default LinkCard;