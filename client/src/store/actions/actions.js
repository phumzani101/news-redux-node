import  {NEWS_RECEIVED, NEWSITEM_RECEIVED} from '../constants/actionTypes'

export function newsReceived(news) {
    return {
        type: NEWS_RECEIVED,
        news: news
    }
}
 
export function fetchNews(fakeNews) {
    return dispatch => {
        dispatch(newsReceived(fakeNews))
    }
}

export const newsItemReceived = (newsItem) => ({
    type: NEWSITEM_RECEIVED,
    newsItem: newsItem
})

export function fetchNewItems(fakeNewsItem) {
    return dispatch => {
        dispatch(newsItemReceived(fakeNewsItem))
    }
}
