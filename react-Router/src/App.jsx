import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Home from "./Component/Home"
import Feedback from "./Component/Feedback"
import Login from "./Component/Login"
function App() {


  return (
    <>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/login" element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
