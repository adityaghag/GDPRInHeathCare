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
        if (localStorage.getItem('isAuth') === 'true')
            return true;
        else
            return false;
    }
}

export default new Auth()