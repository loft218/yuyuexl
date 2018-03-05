import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Login'

import Header from './Header'
import Sidebar from './Sidebar'

class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <h1>Dashboard</h1>
                        </main>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Admin