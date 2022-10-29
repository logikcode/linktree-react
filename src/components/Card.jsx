import React from 'react'
import { Link, Button, Iyalaya } from './CardStyled';

function LinkCard(props) {
  return (
    <Iyalaya>
    <Link>
        <Button id ={props.id} href={props.href}>{props.text}</Button>
    
    </Link>
    </Iyalaya>
  )
}

export default LinkCard;