import { combineReducers } from "redux";
import newsReducer from "./news.reducer";
import authReducer from "./auth.reducer";


const rootReducer = combineReducers({
    news: newsReducer,
    auth: authReducer
})

export default rootReducer;