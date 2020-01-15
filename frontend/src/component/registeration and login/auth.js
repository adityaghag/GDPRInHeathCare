class Auth {
    constructor() {
        this.auth = false
    }

    login(cb) {
        localStorage.setItem('isAuth', true)
        this.auth = true
    }

    logout(cb) {
        localStorage.setItem('isAuth', false)
        this.auth = false
    }

    isAuth() {
        return this.auth
    }
}

export default new Auth()