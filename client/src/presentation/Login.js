import React, { Component } from 'react'
import { submitLogin } from '../store/actions/auth.actions'
import { connect } from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             details: {
                 username: '',
                 password: ''
             }
        }
    }

    updatedDetails = (event) => {
        const newDetails = Object.assign({}, this.state.details)

        newDetails[event.target.name] = event.target.value
        this.setState({
            details: newDetails
        })
    }

    login = (event) => {
        event.preventDefault()
        this.props.submitLogin(this.state.details)
    }
    
    
    render() {
        const {details} = this.state
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.login}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" value={details.username}
                            onChange={this.updatedDetails} className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={details.password}
                            onChange={this.updatedDetails} className="form-control"
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    submitLogin: submitLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)