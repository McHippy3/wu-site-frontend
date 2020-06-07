import React from 'react'
import FadeIn from 'react-fade-in';
import './App.css'
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'

class App extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Header/>
        <FadeIn transitionDuration={800}>
          <Home/>
          <About/>
          <Projects/>
        </FadeIn>
      </React.Fragment>
    )
  }
}

export default App