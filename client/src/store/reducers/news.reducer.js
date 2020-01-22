import { NEWS_RECEIVED, NEWSITEM_RECEIVED, NEWSITEM_LOADING, NEWS_SUBMIT } from "../constants/actionTypes";

let initialState = {
    news: [],
    newsItem: {},
    newsItemLoading: true
}

export default function (state = initialState, action) {

    const updated = Object.assign({}, state)

    switch (action.type) {
        case NEWS_RECEIVED:
            updated['news'] = action.news
            return updated
        case NEWSITEM_RECEIVED:
            updated['newsItem'] = action.newsItem
            updated['newsItemLoading'] = false
            return updated
        case NEWS_SUBMIT:
        case NEWSITEM_LOADING:
            updated['newsItemLoading'] = true
            return updated
        default:
            return state;
    }
}