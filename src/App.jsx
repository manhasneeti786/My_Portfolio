
import Navbar from './component/Navbar.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Skills from './component/Skills.jsx'
import Services from './component/Services.jsx'
import Contact from './component/Contact.jsx'
import Footer from './component/Footer.jsx'
import { Toaster } from 'react-hot-toast'
function App() {


  return (
    <>
<div>
<Navbar />
   <Home />
    <About/>
    <Skills/>
    <Services/>
    <Contact/>
    <Footer/>
</div>
<Toaster/>
    </>
  )
}

export default App
