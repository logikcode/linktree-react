import LinkTree from "./components/LinkTree";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ContactUs from "./ContactUs";
function App() {
  return (
    
    <Routes>
      <Route path="/linktree-react" element={<LinkTree /> }> 
      </Route>
       <Route path="/linktree-react/contact" element ={<ContactUs />} />
    </Routes>
      
    
   
  );
}

export default App;

{
  /*<Main>
  <Section>
    <ProfileSection/>

    <div className="links">
  
    <LinkCard id = "btn__zuri" text="Zuri Team" href="https://training.zuri.team/"/>
    <LinkCard id = "books" text="Zuri Books" href="https://books.zuri.team/" title={bookSubText}/>
    <LinkCard id = "book__python" text="Python Books" href="https://books.zuri.team/python-for-beginners?ref_id=logikcode" title={pythonBook}/>
    <LinkCard id = "pitch" text="Background Check for Coders" href="https://background.zuri.team" title={checkingCoder}/>
    <LinkCard id = "book__design" text="Design Books" href="https://books.zuri.team/design-rules" title={designBooks}/>
    </div>
    
    <SocialShare/>
   
  </Section>
   
  <Footer />
</Main> */

}
