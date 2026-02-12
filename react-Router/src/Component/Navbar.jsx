import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/navbar.css"
const Navbar = () => {
    return (
            <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="logo">
                <a className="navbar-brand" href="#">Navbar</a>
                </div>
                <div className="navItem">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <Link  className="navbar-brand" to="/shows">Shows</Link>
                        </li>
                        <li className="nav-item active">
                            <Link  className="navbar-brand" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand"  to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand"  to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand"  to="/feedback">Feedback</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="navbar-brand"  to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand"  to="/input-handler">InputHandler</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand"  to="/employee">EmployeeProps</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand"  to="/formHandling">Form Handling</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand"  to="/student-form">Student Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand"  to="/formValidation1">Form Validation</Link>
                        </li>
                    </ul>
                </div>

                </div>
            </nav>
    )
}

export default Navbar