import { USER_REGISTERED, USER_LOGGEDIN, USER_LOGOUT } from "../constants/actionTypes";

const initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    username: localStorage.getItem('username') ? localStorage.getItem('username') : ''
}

export default (state = initialState, action) => {
    const updated = Object.assign({}, state)

    switch (action.type) {
        case USER_REGISTERED:
            updated['loggedIn'] = true
            updated['username'] = action.username
            return updated
        case USER_LOGGEDIN:
            updated['loggedIn'] = true
            updated['username'] = action.username
            return updated
        case USER_LOGOUT:
            updated['loggedIn'] = false
            updated['username'] = ''
            return updated            
        default:
            return updated
    }
}