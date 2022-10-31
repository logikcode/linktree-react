import { Main, Section } from "./components/LinktreeStyled";
import ProfileSection from "./components/Profile";
import LinkCard from "./components/Card";
import SocialShare from "./components/SocialShare";
import Footer from "./components/LinktreeFooter";
function App() {
  const bookSubText = "This is where you find books about design and coding";
  const pythonBook = "This is where you get excellent books on python programming";
  const checkingCoder = "Are you a coder? We will verify your claim!";
  const designBooks = "Get the best books on designs here! All freely offered by Zuri."
  return (
    <Main>
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
    </Main>
  );
}

export default App;
