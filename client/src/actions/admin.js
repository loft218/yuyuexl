import axios from 'axios'

var instance = axios.create({
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
})

const httpGet = (url, params = {}) => {
    return instance.get(url, { params })
}

const httpPost = (url, data = {}) => {
    return instance.post(url, { data })
}

const signIn = (username, password) => {
    return httpPost('/admin/sign-in', { username, password })
}

export const Auth = {
    signIn
}