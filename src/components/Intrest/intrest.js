import React from 'react'
import './intrest.css'
import JavaScript from'../../assets/javascript.png'
import HTML5 from '../../assets/html.png'
import CSS from '../../assets/css.png'
import REACT from '../../assets/react.png'
import REDUX from '../../assets/redux.png'
import GIT from '../../assets/git.png'


const Intrest = () => {
  return (
    <section id='intrest'>
        <span className='intrestTitle'>My Skills</span>   
        <span className='intrestDesc'>Through my studies, I've gained solid understanding of computer science and frontend development concepts, and have dedicated a lot of my free time to apply these concepts to real-world scenarios and applications.</span>
        <div className='intrestBars'>
            <div className='skills__box'>  
              <img src={JavaScript} alt="javascript" className="skill-icon"/>
                  <div className='icon__wrapper'>
                    <h3>JavaScript</h3>
                  </div>
                  </div>
                  <div className='skills__box'>
                  <img src={REACT} alt="react" className="skill-icon"/>
                  <div className='icon__wrapper'>
                    <h3>React</h3>
                    </div>
                  </div>
                  <div className='skills__box'>
                   <img src={HTML5} alt="html" className="skill-icon"/>
                  <div className='icon__wrapper'>
                    <h3>HTML</h3>
                  </div>
                  </div>
                  <div className='skills__box'>
                   <img src={CSS} alt="css" className="skill-icon"/>
                  <div className='icon__wrapper'>
                    <h3>CSS</h3>
                  </div>
                  </div>
                  <div className='skills__box'>
                  <img src={REDUX} alt="redux" className="skill-icon"/>
                  <div className='icon__wrapper'>
                    <h3>REDUX</h3>
                  </div> 
                  </div>
                  <div className='skills__box'>
                  <img src={GIT} alt="git" className="skill-icon"/>
                  <div className='icon__wrapper'>
                    <h3>GIT</h3>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Intrest