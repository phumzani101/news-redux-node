import { USER_REGISTERED, USER_LOGGEDIN, USER_LOGOUT } from "../constants/actionTypes";


function userLoggedIn(username) {
    return {
        type: USER_LOGGEDIN,
        username: username
    }
}

export function submitLogin(data) {
    return dispatch => {
        return fetch(`/user/${data.username}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) => {
            // if (!response.ok) {
            //     throw Error(response.statusText)
            // }
            return response.json()
        }).then((response) => {
            localStorage.setItem('username', response.data.username)
            localStorage.setItem('token', response.data.tokenID)

            dispatch(userLoggedIn(response.data.username))
        }).catch((e) => console.log(e))
    }
}

function userRegistered(username) {
    return {
        type: USER_REGISTERED,
        username: username
    }
}

export function submitRegister(data) {
    return dispatch => {
        return fetch('/user/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        })
            .then((response) => {
                // if (!response.ok) {
                //     throw Error(response.statusText);
                // }
                return response.json();
            })
            .then((data) => {

                localStorage.setItem('username', data.data.username);
                localStorage.setItem('token', data.data.tokenID);

                dispatch(userRegistered(data.data.username));
            })
            .catch((e) => console.log(e));
    }
}

function logout() {
    return {
        type: USER_LOGOUT
    }
}

export function logoutUser() {
    return dispatch => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        dispatch(logout());
    }
}