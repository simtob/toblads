import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location"> 
                        <FaHome size={20} style={
                            {color:"#fff", marginRight: "2rem" }}/>
                        <div>
                            <p>
                                Stockholm
                            </p>
                            <p>
                                Sweden
                            </p>
                        </div>
                    </div>
                        <div className="phone">
                            <h4> 
                            <FaPhone size={20} style={
                                {color:"#fff", marginRight: "2rem"}}/>
                                    076-286 64 65  
                            </h4>
                        </div>
                    <div className="email">
                        <h4> 
                        <FaMailBulk size={20} style={
                            {color:"#fff", marginRight: "2rem" }}/>
                                simontoblad@hotmail.com  
                        </h4>
                    </div>
                </div>
            <div className="right">
                <h4>About me</h4>
                <p> Stock market guru, bodybuilder and artist. I'm none of these things but 
                    I'm authentically me. Some of my interests include: Technology, finance, football, design, and weightlifting. 
                    I grew up in Stockholm, but like to travel at every available opportunity, as I love
                    meeting new people, discovering new foods and new cultures. 
                </p>
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100010104794389">
                        <FaFacebook size={30} style={
                            {color:"#fff", marginRight: "1rem" }}/> 
                    </a>
                    <a href="https://www.instagram.com/simontoblad/">
                    <FaInstagram size={30} style={
                        {color:"#fff", marginRight: "1rem" }}/>
                    </a>
                    <a href="https://www.linkedin.com/in/simon-toblad-99374b164/">
                    <FaLinkedin size={30} style={
                        {color:"#fff", marginRight: "1rem" }}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;