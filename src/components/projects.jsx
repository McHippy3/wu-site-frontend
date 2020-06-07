import React from 'react'
import './projects.css'

function Projects (props) {
  return (
    <div id='projects' className='section'>
      <h3 className='heading'>PROJECTS</h3>
      <div id='projects-list'>
      <div className='tile'>
        <img src={require('./images/quick_pick.png')} alt='flutter app called quick pick' className='tile-image'></img>
        <div className='text-container'>
          <p className='project-title'>Quick Pick Mobile App</p>
          <p className='project-tools'>Flutter - Dart</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
        <div className='button-container'>
          <a className='source-link' href='https://github.com/McHippy3/quick-pick'>View Source</a>
        </div>
      </div>

      <div className='tile'>
        <img src={require('./images/quick_pick.png')} alt='flutter app called quick pick' className='tile-image'></img>
        <div className='text-container'>
          <p className='project-title'>Quick Pick Mobile App</p>
          <p className='project-tools'>Flutter - Dart</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
        <div className='button-container'>
          <a className='source-link' href='https://github.com/McHippy3/quick-pick'>View Source</a>
        </div>
      </div>

      <div className='tile'>
        <img src={require('./images/quick_pick.png')} alt='flutter app called quick pick' className='tile-image'></img>
        <div className='text-container'>
          <p className='project-title'>Quick Pick Mobile App</p>
          <p className='project-tools'>Flutter - Dart</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
        <div className='button-container'>
          <a className='source-link' href='https://github.com/McHippy3/quick-pick'>View Source</a>
        </div>
      </div>

      <div className='tile'>
        <img src={require('./images/quick_pick.png')} alt='flutter app called quick pick' className='tile-image'></img>
        <div className='text-container'>
          <p className='project-title'>Quick Pick Mobile App</p>
          <p className='project-tools'>Flutter - Dart</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
        <div className='button-container'>
          <a className='source-link' href='https://github.com/McHippy3/quick-pick'>View Source</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects