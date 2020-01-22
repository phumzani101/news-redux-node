import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../store/actions/auth.actions'
import Register from '../presentation/Register'
import Login from '../presentation/Login'

class Authentication extends Component {

    constructor(props) {
        super(props)

        this.state = {
            toggleReg: true
        }
    }

    showLogin = () => {
        this.setState({
            toggleReg: false
        })
    }

    showReg = () => {
        this.setState({
            toggleReg: true
        })
    }

    logout = () => {
        this.props.logoutUser()
    }

    render() {
        console.log(this.props)
        const userNotLoggedIn = (
            <div>
                <button onClick={this.showLogin}>
                    Login
                </button>
                <button onClick={this.showReg}>
                    Register
                </button>
                {this.state.toggleReg ? <Register /> : <Login />}
            </div>
        )

        const userLoggedIn = (
            <div>
                Logged in as {this.props.username}
                <button onClick={this.logout}>
                    Logout
                </button>
            </div>
        )
        return (
            <div>
                {this.props.loggedIn ? userLoggedIn : userNotLoggedIn}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
        username: state.auth.username
    }
}

const mapDispatchToProps = {
    logoutUser: logoutUser
}


export default connect(mapStateToProps, mapDispatchToProps)(Authentication)