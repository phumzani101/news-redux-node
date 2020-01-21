import { NEWS_RECEIVED, NEWSITEM_RECEIVED } from "../constants/actionTypes";

let initialState = {
    news: [],
    newsItem: {}
}

export default function (state = initialState, action) {

    const updated = Object.assign({}, state)

    switch (action.type) {
        case NEWS_RECEIVED:
            updated['news'] = action.news
            return updated
        case NEWSITEM_RECEIVED:
            updated['newsItem'] = action.newsItem
            return updated
        default:
            return state;
    }
}