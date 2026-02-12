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
import InputHandler from "./Component/InputHandler"
import Employee from "./Component/propsExample/Employee"
import FormHandling from "./Component/React Form Hook/FormHandling"
import StudentForm from "./Component/React Form Hook/StudentForm"
import FormValidation1 from "./Component/Form Validation/FormValidation1"
function App() {


  return (
    <>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/input-handler" element={<InputHandler/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/shows" element={<Shows/>}/>
        <Route path="/watch/:name" element={<Watch/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/formHandling" element={<FormHandling/>}/>
        <Route path="/student-form" element={<StudentForm/>}/>
        <Route path="/formValidation1" element={<FormValidation1/>}/>
        <Route path="/*" element={<Error/>}/>
     </Routes>
    </>
  )
}

export default App
