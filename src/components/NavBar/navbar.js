import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo"  className='logo'/>
        <div className="desktopMenu">
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='intrest' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Projects</Link>
        </div>
        </div>
        <button className="desktopMenuBtn" onClick={()=> {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>
        <img src={contactImg} alt="" className='desktopMenuImg' />Contact</button>
    </nav>
  )  
}

export default Navbar 
