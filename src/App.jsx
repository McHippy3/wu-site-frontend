import React from 'react'
import './App.css'
import Header from './components/header'
import Home from './components/home'

class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Home/>
            </React.Fragment>
        )
    }
}

export default App