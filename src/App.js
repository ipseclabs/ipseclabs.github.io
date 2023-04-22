import Contact from "./Pages/contact.js"
import Hero from './Pages/hero.js';
import WeDo from './Pages/wedo';
import TrustUs from './Pages/trustus.js'
import Differ from './Pages/differ.js'
import Clients from './Pages/Clients.js'
// import Testimonials from './Pages/testimonials.js'
// import Contributions from './Pages/contributions.js'
import Footer from './Pages/footer.js'
import Contributions from "./Pages/Contributions.js";
import CTF from "./Pages/ctf.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllSections from "./all.js";

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<AllSections />}>

        </Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
