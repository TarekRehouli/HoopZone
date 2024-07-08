import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      windowm.scrollY > 50 ? setSticky(true): setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt='' className='logo'/>
      <ul>
        <li>HOME</li>
        <li>COURTS</li>
        <li>CONNECT</li>
        <li><button className='btn'>BOOK</button></li>
      </ul>
    </nav>
  )
}

export default Navbar