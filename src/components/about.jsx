import React from 'react'
import './about.css'

function About(props) {
  return (
    <div id='about' className='section'>
      <div id='left-about'>
        <h3 className='heading'>ABOUT ME</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. 
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div id='right-about'>
        <img src={require('./images/ugly.jpg')} alt='David Wu posing'></img>
      </div>
    </div>
  )
}

export default About