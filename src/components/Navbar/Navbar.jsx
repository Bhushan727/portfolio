import React from 'react'
import './Navbar.css'
import { HashLink as NavLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div className='navDiv' id='home'>

        <h1 className='left'>Shashi Bhushan Kumar</h1>

        <div className="right">

            <NavLink to='/#home' className="links"><li> Home </li></NavLink>
            <NavLink to='/#about' className="links" smooth><li> About </li></NavLink>
            <NavLink to='/#portfolio' className="links"><li> Portfolio </li></NavLink>
            <NavLink to='/#resume' className="links"><li> Resume </li></NavLink>
            <NavLink to='/#people' className="links"><li> People </li></NavLink>
            <NavLink to='/#contact' className="links"><li> Contact </li></NavLink>
            

        </div>

        
    </div>
  )
}

export default Navbar