import React, { Component } from 'react'

export default class CommentElement extends Component {
    render() {
        const { data } = this.props
        return (
            <div>
                <p><h4>{data.username}</h4></p>
                <p>{data.body}</p>
            </div>
        )
    }
}
