import React from 'react';
import { FooterSection } from './LinktreeFooterStyled';
import i4g from "../assets/images/I4G.png"
import logo from "../assets/images/logo.36d2d48a.svg"

function Footer() {
  return (
    <FooterSection>
    <div className='footer'>
      <div className='zuri-logo'>
        <img src={logo} alt="" />
      </div>

      <h5 className='footer-text'>HNG Internship 9 Frontend Task</h5>

      <div className='icon-globe'>
       <img src={i4g} alt="" />
      </div>
        
    </div>
        
    </FooterSection>
  )
}

export default Footer