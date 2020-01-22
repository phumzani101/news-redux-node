import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Authentication from '../containers/Authentication'

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h1>Breaking news</h1>
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/news/submit">Submit News</Link></li>
                    </ul>
                    <Authentication />
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
