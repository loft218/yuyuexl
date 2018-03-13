import React, { Component } from 'react'
import {
    withRouter,
    Link
} from 'react-router-dom'
import AdminAuth from './AdminAuth'

const AuthButton = withRouter(
    ({ history }) =>
        AdminAuth.isAuthenticated ? (
            <Link className="nav-link" to="" onClick={(event) => {
                AdminAuth.signOut(() => {
                    history.push("/admin")
                })
                event.preventDefault()
            }}>退出登录</Link>
        ) : (
                <Link className="nav-link" to='/admin/login' >登录</Link>
            )
)

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/admin">Company name</Link>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <AuthButton />
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header
