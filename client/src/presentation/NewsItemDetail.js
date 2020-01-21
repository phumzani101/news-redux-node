import React, { Component } from 'react'

export default class NewsItemDetail extends Component {
    render() {
        const { data } = this.props
        return (
            <div>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>
        )
    }
}
