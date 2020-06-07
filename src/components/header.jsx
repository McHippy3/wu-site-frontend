import React, { Component } from 'react'
import './header.css'
import { Link } from "react-scroll";

class Header extends Component {
  state = {
    links: [
      'Home',
      'About',
      'Projects',
      'Blog',
      'Contact',
    ]
  }

  render() {
      return (
        <header>
          { this.state.links.map( link =>
            <Link 
              key={link}
              activeClass='active'
              to={link.toLowerCase()} 
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className='header-link'>
                {link}
            </Link>
          )}
        </header>
      )
  }
}

export default Header