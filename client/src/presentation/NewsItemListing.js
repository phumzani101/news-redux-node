import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewsItemListing extends Component {
    
    render() {
        const {data} = this.props
        return (
            <div>
                <div>
                    <Link to={`/news/${data.id}`}>
                        <h4>{data.title}</h4>
                    </Link>
                </div>
                <div>
                    {data.teaser}
                </div>
            </div>
        )
    }
}
