import React from 'react'
import './about.css'

function About(props) {
  return (
    <div id='about' className='section'>
      <div id='left-about'>
        <h3 className='heading'>ABOUT ME</h3>
        <p>
          Greetings! I'm David, a 1st year student studying computer science at the University of Waterloo. 
        </p>
        <p>
          My current focus in software development revolves around the web where I work with technologies such as Django, MySQL, and Javascript (React, vanilla, etc).
          However, I am always open to learning new things, and I hope to spend my years in school gaining exposure to as many stacks as possible. 
        </p>
      </div>
      <div id='right-about'>
        <img src={require('./images/ugly.jpg')} alt='David Wu posing'></img>
      </div>
    </div>
  )
}

export default About