
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


export default function AllSections() {
    return (
        <>
        
        <Hero />
        <CTF id={"#ctf"} />
    <WeDo />
    <TrustUs />
    <Differ />
    <Clients />
    {/* <Testimonials /> */}
    {/* <Contributions /> */}
    
    <Contributions />
    <Contact />
    <Footer />

        </>
    );
}