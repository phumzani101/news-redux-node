import { NEWS_RECEIVED, NEWSITEM_RECEIVED, NEWSITEM_LOADING, NEWS_SUBMIT } from '../constants/actionTypes'

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
            //console.log(response)
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
            //console.log(response)
            return dispatch(newsItemReceived(response.data))
        }).catch((e)=> console.log(e))
    }
}

export function newsItemLoading() {
    return {
        type: NEWSITEM_LOADING
    }
}

export function newsSubmit() {
    return {
        type: NEWS_SUBMIT
    }
}

export function submitNewsStory(data) {
    return dispatch => {
        return fetch('/news', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data), 
            mode: 'cors'
        }).then((data) => {
            dispatch(newsSubmit())
        }).catch((e) => {
            console.log(e)
        })
    }
}