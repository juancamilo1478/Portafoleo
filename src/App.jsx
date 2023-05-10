 
import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Proyects from "./Components/Proyects/Proyects"
import CvPdf from "./Components/CvPdf/CvPdf"


function App() {
 
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/proyects" element={<Proyects/>}/>
        <Route path="/pdf" element={<CvPdf/>}/>
      </Routes>
    </>
  )
}

export default App
