import { NEWS_RECEIVED, NEWSITEM_RECEIVED, NEWSITEM_LOADING } from '../constants/actionTypes'

export function newsReceived(news) {
    return {
        type: NEWS_RECEIVED,
        news: news
    }
}

export function fetchNews() {
    return dispatch => {
        return fetch('/news').then((response) => {
            return response.json()
        }).then((response) => {
            console.log(response)
            dispatch(newsReceived(response.data))
        }).catch((e) => {
            console.log(e)
        })
    }
}

export const newsItemReceived = (newsItem) => ({
    type: NEWSITEM_RECEIVED,
    newsItem: newsItem
})

export function fetchNewItems(id) {
    return dispatch => {
        return fetch(`/news/${id}`)
        .then((response) => response.json())
        .then((response) => {
            return dispatch(newsItemReceived(response.data))
        }).catch((e)=> console.log(e))
    }
}

export function newsItemLoading() {
    return {
        type: NEWSITEM_LOADING
    }
}