import React, { Component } from 'react'
import { fetchNewItems } from '../store/actions/news.actions'
import NewsItemDetail from '../presentation/NewsItemDetail'
import { connect } from 'react-redux'
import CommentsPanel from './CommentsPanel'

class NewsArticle extends Component {

    componentDidMount() {

        this.props.dispatch(fetchNewItems(this.props.match.params.id))
    }
    render() {
        const { newsItem, newsItemLoading, comments } = this.props
        return (
            <div>
                <h2>News Story</h2>
                <ul>
                    {!newsItemLoading ? (
                        <div>
    <p>{newsItem._id}</p>
                            <NewsItemDetail data={newsItem} />
                            <CommentsPanel comments={comments} id={newsItem._id} />
                        </div>
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
    comments: state.news.newsItem.comments,
    newsItemLoading: state.news.newsItemLoading
})

export default connect(mapStateToProps)(NewsArticle)