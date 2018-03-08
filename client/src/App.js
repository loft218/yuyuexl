import React, { Component } from 'react'
import logo from './assets/images/logo.svg'
import './App.css'

import axios from 'axios'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            welcome: ''
        }
    }

    componentDidMount() {
        axios.get('/api/welcome')
            .then(res => {
                this.setState({ welcome: res.data.welcome })
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    {this.state.welcome}
                </p>
            </div>
        )
    }
}

export default App
