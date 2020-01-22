import { NEWS_RECEIVED, NEWSITEM_RECEIVED, NEWSITEM_LOADING, NEWS_SUBMIT, NEWS_ADDCOMMENT } from '../constants/actionTypes'

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
            }).catch((e) => console.log(e))
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

function addComment(username, body) {
    return {
        type: NEWS_ADDCOMMENT,
        username: username,
        body: body
    }
}

export function submitComment(newsItemID, username, data) {

    const token = localStorage.getItem('token') || null

    return dispatch => {
        return fetch(`/news/${newsItemID}/comment`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {

                dispatch(addComment(username, data.body))
            }
        }).catch((e) => console.log(e))
    }
}