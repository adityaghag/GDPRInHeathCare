class Auth {
    constructor() {
        this.auth = false
    }

    login() {
        localStorage.setItem('isAuth', true)
        this.auth = true
    }

    logout() {
        localStorage.setItem('isAuth', false)
        this.auth = false
    }

    isAuth() {
        return this.auth
    }
}

export default new Auth()