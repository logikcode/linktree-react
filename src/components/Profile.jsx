import React from 'react';
import { Profile, ShareButton } from './ProfileStyled';
import me from "../assets/images/Emmanuel-Olad.jpg"
import share from "../assets/images/Icon.svg"
import dots from "../assets/images/dots-horizontal.svg"
export default function ProfileSection (){
  return (
    <>
    <Profile>
        <div className='user-info'>
     
              <img src={me} alt="" id='profile__img' className='user'/>

   
         
          <h2 id='twitter'>@Yhello_G</h2>
          <h2 id='slack'  hidden>logikcode</h2>
        </div>
        <ShareButton> <img src={share} alt=""/></ShareButton>
        <button className='share-icon-mobile'><img src={dots} alt="" /></button>
      
    </Profile> 
   
  
    </>
  )
}
