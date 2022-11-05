import { Main, Section, } from "./LinktreeStyled";
import ProfileSection from "./Profile";
import LinkContainer from "./LinkContainer";
import SocialShare from "./SocialShare";
import Footer from "./LinktreeFooter";
import {Link, NavLink} from "react-router-dom"

import React from 'react'

function LinkTree() {

    const bookSubText = "This is where you find books about design and coding";
    const pythonBook = "This is where you get excellent books on python programming";
    const checkingCoder = "Are you a coder? We will verify your claim!";
    const designBooks = "Get the best books on designs here! All freely offered by Zuri."
    const contact = "Contact Me"
  return (
    
      <Main>
        <Section>
          <ProfileSection/>
  
          <div className="links">
        
          <LinkContainer id = "btn__zuri" text="Zuri Team" href="https://training.zuri.team/"/>
          <LinkContainer id = "books" text="Zuri Books" href="https://books.zuri.team/" title={bookSubText}/>
          <LinkContainer id = "book__python" text="Python Books" href="https://books.zuri.team/python-for-beginners?ref_id=logikcode" title={pythonBook}/>
          <LinkContainer id = "pitch" text="Background Check for Coders" href="https://background.zuri.team" title={checkingCoder}/>
          <LinkContainer id = "book__design" text="Design Books" href="https://books.zuri.team/design-rules" title={designBooks}/>
          <NavLink to={"/linktree-react/contact"}>
          <LinkContainer id = "contact" text={"Contact Me"} title ={contact}/>

          </NavLink>

          
          </div>
          
          <SocialShare/>
         
        </Section>
         
        <Footer />
      </Main>
    );
    
}

export default LinkTree