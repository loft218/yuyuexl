import { Auth } from '../actions/admin'

const AdminAuth = {
    isAuthenticated: false,
    authenticate(username, password, cb) {
        Auth.signIn(username, password)
            .then(res => {
                console.log(res.data)
                this.isAuthenticated = true
                cb()
            })
            .catch(err => {
                console.error(err)
                cb(err)
            })
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

export default AdminAuth