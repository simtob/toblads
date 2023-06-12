import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  window.scrollTo(0, 0);
  
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" 
      text="24 year old that's always eager to learn something new">
      </HeroImg2>
      <AboutContent>
        
      </AboutContent>
      <Footer/>
    </div>
  )
}

export default About