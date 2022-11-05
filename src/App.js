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

