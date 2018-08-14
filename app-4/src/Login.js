import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: ""
        }

        this.handlePassChange = this.handlePassChange.bind(this)
        this.handleUserChange = this.handleUserChange.bind(this)
        this.alertLogin = this.alertLogin.bind(this)
    }

    handleUserChange(e) {
        this.setState({ username: e })
        return this.state.userName
    }

    handlePassChange(e) {
        this.setState({ password: e })
        return this.state.password
    }

    alertLogin() {
        return alert("Username: " + this.state.username + " Password: " + this.state.password)
    }

    render() {
        return (
            <div>
                <input onChange={e => this.handleUserChange(e.target.value)} placeholder="Username" />
                <input onChange={e => this.handlePassChange(e.target.value)} type="Password" placeholder="Password" />
                <button onClick={() => this.alertLogin()}>Login</button>
            </div>
        )
    }
}