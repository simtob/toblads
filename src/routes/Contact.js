import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Contact = () => {
  window.scrollTo(0, 0);
  
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT" text="Don't hesitate to get in touch"/>
      <Form />
      <Footer/>
    </div>
  )
}

export default Contact