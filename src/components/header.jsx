import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  state = {
    links: [
      {name: 'Home', active: true},
      {name: 'About', active: false},
      {name: 'Projects', active: false},
      {name: 'Blog', active: false},
      {name: 'Contact', active: false},
    ]
  }

  render() {
      return (
        <header>
          { this.state.links.map( link =>
            <a key={link.name} href={'#' + link.name.toLowerCase()} className={'header-link' + (link.active ? ' active' : '')} onClick={() => this.handleLink(link.name)}>{link.name}</a>
          )}
        </header>
      )
  }

  handleLink(newActiveLink){
    const links = this.state.links.map( link => {
      if (newActiveLink === link.name){
        link.active = true
      }
      else link.active = false
      return link
    })
    this.setState({ links })
  }
}

export default Header