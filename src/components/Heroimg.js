import "./HeroimgStyles.css";
import { Link } from "react-router-dom";

import React from 'react'

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src="https://images.unsplash.com/photo-1548679847-1d4ff48016c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW4lMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"></img>
        </div>
        <div className="content">
            <p> I'M A CURIOUS MIND THAT'S EAGER TO LEARN NEW THINGS AND TAKE ON NEW CHALLENGES.</p>
            <h1>Simon Toblad</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg