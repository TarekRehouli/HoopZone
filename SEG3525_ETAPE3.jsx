import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import About from './Components/About/About'
import Courtex from './Components/Courtex/Courtex'
import Gym from './Components/Gym/Gym'
import Connect from './Components/Connect/Connect'
import Title from './Components/Title/Title'
import FixedIcon from './Components/FixedIcon/FixedIcon'
import Contact from './Components/Contact/Contact'






const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <FixedIcon/>
        <Title subtitle='Our Facilities' title='What We Offer'/>
        <Programs/>
        <About/>
        <Courtex/>
        <Gym/>
        <Title subtitle='Connect' title='Join A Team'/>
        <Connect/>
        <Title subtitle='Contact us' title='Book A Reservation'/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
