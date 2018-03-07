import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import AdminAuth from './AdminAuth'

class Login extends Component {
    state = {
        redirectToReferrer: false
    }

    login = () => {
        AdminAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true })
        })
    }

    componentWillMount() {
        import('./Login.css')
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <form className="form-signin">
                <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                <div className="checkbox mb-3">
                    <label><input type="checkbox" value="remember-me" /> Remember me</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
            // <div>
            //     <p>You must log in to view the page at {from.pathname}</p>
            //     <button onClick={this.login}>Log in</button>
            // </div>
        )
    }
}

export default Login