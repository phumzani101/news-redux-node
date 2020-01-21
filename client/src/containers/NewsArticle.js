import React, { Component } from 'react'
import { fetchNewItems } from '../store/actions/actions'
import NewsItemDetail from '../presentation/NewsItemDetail'
import { connect } from 'react-redux'

class NewsArticle extends Component {

    componentDidMount() {

        this.props.dispatch(fetchNewItems(this.props.match.params.id))
    }
    render() {
        const { newsItem, newsItemLoading } = this.props
        return (
            <div>
                <h2>News Story</h2>
                <ul>
                    {newsItemLoading ? (
                        <NewsItemDetail data={newsItem} />
                    ) : (
                            <p>News Loading......</p>
                        )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    newsItem: state.news.newsItem,
    newsItemLoading: state.news.newsItemLoading
})

export default connect(mapStateToProps)(NewsArticle)