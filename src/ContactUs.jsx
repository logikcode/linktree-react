import React from 'react';
import { MainSection, SectionBody, Content, ContactForm } from './components/ContactUsStyled';
import Footer from './components/LinktreeFooter';

function ContactUs() {
  return (
    <MainSection>
        
        <SectionBody>
          
           <Content>
            
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
                        <label htmlFor="email">Email</label>
                        <input type="text" className='email' placeholder='yourname@email.com'/>
                    </div>
                    <div className="text-area">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10" className='form-message' placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                    </div>

                    <div className="permission">
                        <input type="checkbox"  className='check-permission'/>
                        <p className="permission-text">You agree to providing your data to {} who may contact you.</p>
                    </div>

                </div>
                <button className='submit-btn'>Send message</button>
            </ContactForm>
           </Content>
        </SectionBody>
        <Footer></Footer>
    </MainSection>
  )
}

export default ContactUs