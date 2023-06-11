import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import gradimg from "../assets/Graduationflowers.JPG";
import arsenal1 from "../assets/arsenal1.JPG";
import React from 'react';


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I?</h1>
            <p> 
                My goal is to use my work expertise and my time at KTH to better 
                the world through leveraging data, digitalization and technological 
                innovation. Although I'm currently not certain of how, 
                I am certain that one day I will. Other than that 
                I'm very interested in technology, finance, football, design, 
                and weightlifting. I grew up in Stockholm, but 
                like to travel at every available opportunity, 
                as I love meeting new people, discovering 
                new foods and new cultures. I've just finished my studies at Kungliga Tekniska Högsklan (KTH), 
                obtaining a B.Sc. In Media Technology and a M.Sc. In
                ICT Innovation Human-computer Interaction and Design, that's why I'm now looking for my next challenge
                and hope to land a job that allows me to continue learning and improving.
                If you have any questions or just want to have a chat,
                don't hesitate to reach out!
            </p>
            <Link to="/contact">
                <button className="btn">
                    Contact
                </button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={gradimg} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={arsenal1} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;