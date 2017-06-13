import {
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGOUT_SUCCESS,
} from '../actions';

export default function (state = {
    isLoggedIn: false,
}, action) {
    switch (action.type) {
        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
            };
        case FETCH_LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
}
