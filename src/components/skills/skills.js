import React from 'react'
import './skills.css'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
import LogoDesign from '../../assets/ui-design.png'


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>A Passionate frontend developer with a keen eye for intutive designand a commitment to creating engaging user-friendly experiances.I am proficieny in HTML,CSS and Javascript</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>Web design is the creation of websites and pages to reflect a company's brand and information and ensure a user-friendly experience.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>App design is the process of creating the visual look, layout, and flow of an application's interface.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={LogoDesign} alt='AppDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Photos / Videos Editing</h2>
                    <p>Photo & Video create using some of tools Picsart, Lightroom, Canva.</p>
                </div>
            </div>
            
        </div>
        <div id='container'>
            
        </div>
    </section>
  )
}

export default Skills