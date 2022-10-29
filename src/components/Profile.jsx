import React from 'react';
import { Profile } from './ProfileStyled';
import me from "../assets/images/Emmanuel-Olad.jpg"

export default function ProfileSection (){
  return (
    <Profile>
        <div>
          <div>
              <img src={me} alt="" id='profile__img' className='user'/>
          </div>
         
          <h2 id='twitter'>Annete Black</h2>
          <h2 id='slack' className='slack' hidden>Slack username</h2>
        </div>
        <span><a href=''>share</a></span>
    </Profile> 
  )
}
