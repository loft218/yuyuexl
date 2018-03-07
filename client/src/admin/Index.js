import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Admin from './Admin'
import Login from './Login'

import AdminAuth from './AdminAuth'

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => AdminAuth.isAuthenticated ? (
            <Component {...props} />
        ) : (
                <Redirect
                    to={{
                        pathname: "/admin/login",
                        state: { from: props.location }
                    }}
                />
            )}
    />
)

class AdminIndex extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/admin/login' component={Login} />
                    <AdminRoute path='/admin' component={Admin} />
                </Switch>
            </Router>
        )
    }
}

export default AdminIndex