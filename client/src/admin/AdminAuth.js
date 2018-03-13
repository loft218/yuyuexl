import Cookies from 'js-cookie'
import { Auth } from '../actions/admin'

const AdminAuth = {
    get isAuthenticated() {
        if (Cookies.get('admin_token'))
            return true
        return false
    },
    authenticate(username, password, cb) {
        Auth.signIn(username, password)
            .then(res => {
                console.log(res.data)
                // this.isAuthenticated = true
                const expires = new Date(new Date().getTime() + res.data.expires_in * 1000)
                Cookies.set('admin_token', res.data.token, { expires })
                cb(res.status, res.data)
            })
            .catch(err => {
                // console.error(err.response)
                cb(err.response.status, err.response.data)
            })
    },
    signOut(cb) {
        // this.isAuthenticated = false
        Cookies.remove('admin_token')
        setTimeout(cb, 100)
    }
}

export default AdminAuth