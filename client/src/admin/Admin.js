import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

class Admin extends Component {

    componentWillMount() {
        import('./Admin.css')
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <Route path='/admin/dashboard' component={Dashboard} />
                        </main>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Admin