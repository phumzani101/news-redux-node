import React, { Component } from 'react'
import { submitRegister } from '../store/actions/auth.actions'
import { connect } from 'react-redux'

class Register extends Component {
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
        newDetails[event.target.id] = event.target.value
        this.setState({
            details: newDetails
        })
    }

    register = (event) => {
        event.preventDefault()
        this.props.submitRegister(this.state.details)
    }
    
    
    render() {
        const {details} = this.state
        return (
            <div>
                <h3>Register</h3>
                <form onSubmit={this.register}>
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
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    submitRegister: submitRegister
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)