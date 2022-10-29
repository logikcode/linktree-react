import { Main, Section } from "./components/LinktreeStyled";
import ProfileSection from "./components/Profile";
import LinkCard from "./components/Card";
import SocialShare from "./components/SocialShare";
import Footer from "./components/LinktreeFooter";
function App() {
 

  return (
    <Main>
      <Section>
        <ProfileSection/>

        <div>
        <LinkCard id = "btn__zuri" text="Twitter Link" href = ""/>
        <LinkCard id = "btn__zuri" text="Zuri Team" href="https://training.zuri.team/"/>
        <LinkCard id = "books" text="Zuri Books" href="https://books.zuri.team/"/>
        <LinkCard id = "book__python" text="Python Books" href="https://books.zuri.team/python-for-beginners?ref_id=logikcode"/>
        <LinkCard id = "pitch" text="Background Check for Coders" href="https://background.zuri.team"/>
        <LinkCard id = "book__design" text="Design Books" href="https://books.zuri.team/design-rules"/>
        </div>
        <SocialShare/>
      </Section>
      <Footer />
    </Main>
  );
}

export default App;
