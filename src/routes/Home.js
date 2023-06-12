import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/Heroimg'
import Footer from '../components/Footer'
import Work from '../components/Work';

const Home = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
X     <Footer/>
    </div>
  )
}

export default Home;