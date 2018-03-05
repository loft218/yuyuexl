import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './index.css';
import App from './App';
import AdminLogin from './AdminLogin'
import Admin from './admin/Admin'

import registerServiceWorker from './registerServiceWorker';

const AdminAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

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

ReactDOM.render(
    <Router>
        <React.Fragment>
            <Route exact path='/' component={App} />
            <Route exact path='/admin/login' component={AdminLogin} />
            {/* <AdminRoute path='/admin' component={Admin} /> */}
        </React.Fragment>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
