import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Home from "./Component/Home"
import Feedback from "./Component/Feedback"
import Login from "./Component/Login"
import Error from "./Component/Error"
import Shows from "./Component/Shows"
import Watch from "./Component/Watch"
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
        <Route path="/shows" element={<Shows/>}/>
        <Route path="/watch/:name" element={<Watch/>}/>
        <Route path="/*" element={<Error/>}/>
     </Routes>
    </>
  )
}

export default App
