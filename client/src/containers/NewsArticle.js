import React, { Component } from 'react'
import { fetchNewItems } from '../store/actions/actions'
import NewsItemDetail from '../presentation/NewsItemDetail'
import { connect } from 'react-redux'

class NewsArticle extends Component {

    componentDidMount() {
        let fakeNewsItem = {
            id: '1',
            title: 'Mad owl chases car',
            teaser: 'Mad owl seen tormenting drivers in Morecambe',
            body: `Morecambe - Tuesday 8th August 2017

            Yesterday evening motorists were left running for their lives as a mad owl began a campaign of terror on rush traffic. 
            Eye Witness, Eric Barnes said "When I heard it Squawk in the sky above me, I thought I was done for"`
        }

        this.props.dispatch(fetchNewItems(fakeNewsItem))
    }
    render() {
        const { newsItem } = this.props
        return (
            <div>
                <h2>News Story</h2>
                <ul>
                    {newsItem ? (
                        <NewsItemDetail data={newsItem} />
                    ) : (
                            <p>No News</p>
                        )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    newsItem: state.news.newsItem
})

export default connect(mapStateToProps)(NewsArticle)