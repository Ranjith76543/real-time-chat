import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
      <span className='hello'>Hello,</span>
      <span className='introText'>I'm <span className='introName'>Ranjith</span> <br/> Website Designer</span>
      <p className='introPara'>I'm a web developer who loves to create beautiful and functional websites for people who want to make a difference in the world.</p>
      <Link><button className='btn'><img src={btnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro 