import React from 'react'
import './projects.css'
import bg from'../../assets/bg.png'
import bg1 from'../../assets/bg1.png'




const Projects = () => {
  return (
    < section id='projects'>
        <span className='projectsTitle'>My Projects</span>
        <span className='projectsDesc'>Real Time Chat Application</span>
        <div className='projectsBars'>
        <div className='projectsBar'>
            <img src={bg} alt='' width="80%" />
        </div>
        <div className='projectsBar'>
            <img src={bg1} alt='' width="80%" />
        </div>
        </div>
    </section>
  );
}

export default Projects;
