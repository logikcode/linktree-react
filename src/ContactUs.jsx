import React from 'react';
import { MainSection, Header, SectionBody, Content, ContactForm } from './components/ContactUsStyled';
import Footer from './components/LinktreeFooter';

function ContactUs() {
  return (
    <MainSection>
        <Header></Header>
 
        <SectionBody>
          
           <Content>
            ContactUs
            <ContactForm>
                <div className="heading">
                    <div className="heading-text">Contact Me</div>
                    <div className="heading-paragraph">Hi there, contact me to ask me about anything you have in mind.</div>

                </div>

                <div className="form">
                    <div className="form-name">
                        <div className="form-input">
                            <label htmlFor="fname" className='form-label'>First name</label>
                            <input type="text" className='fname' placeholder='Enter your first name' />
                        </div>
                        <div className="form-input">
                            <label htmlFor="fname" className='form-label'>Last name</label>
                            <input type="text" className='fname' placeholder='Enter your last name' />
                        </div>
                    </div>
                    <div className="form-email">
                        
                    </div>
                </div>
            </ContactForm>
           </Content>
        </SectionBody>
        <Footer></Footer>
    </MainSection>
  )
}

export default ContactUs