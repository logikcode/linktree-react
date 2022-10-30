import React from 'react';
import { Profile, ShareButton, ShareButtonContainer } from './ProfileStyled';
import me from "../assets/images/Emmanuel-Olad.jpg"
import share from "../assets/images/Icon.svg"
import dots from "../assets/images/dots-horizontal.svg"
export default function ProfileSection (){
  return (
    <>
    <Profile>
        <div className='user-info'>
          <img src={me} alt="" id='profile__img' className='user'/>
          <h2 id='twitter'>Olah Emmanuel</h2>
          <h2 id='slack'  hidden>logikcode</h2>
        </div>

         
            
            <ShareButton className='share-icon'>
            <span className='share-tooltip'>Share Link</span>
            <img className='share-img' src={share} alt=""/>
            </ShareButton>
        
        <button className='share-icon-mobile'><img src={dots} alt="" /></button>
      
    </Profile> 
    </>
  )
}
