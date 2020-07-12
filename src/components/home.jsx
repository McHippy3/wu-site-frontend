import React from 'react'
import './home.css'
import { Link } from "react-scroll";

function Home(props) {
  return (
    <div style={{backgroundImage:`url(${require('./images/leaves.jpg')})`, backgroundSize: 'cover'}}>
      <div className="section" id="home">
        <div id="heading-container">
          <h3 className="heading"><span>&nbsp;HELLO THERE&nbsp;</span></h3>
          <h3 className="heading"><span>&nbsp;MY NAME IS DAVID WU&nbsp;</span></h3>
          <h3 className="heading"><span>&nbsp;WELCOME TO MY WEBSITE&nbsp;</span></h3>
          <div id="link-container">
            <a href='https://1drv.ms/w/s!AqK7C3CTmrtUiYZUC5r8u7bjsP7GKQ?e=zNMw1S' id='resume-button'>Resume</a>
            <Link to='about' duration={1000} id='see-more-button' smooth={true} offset={-100}>See More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home