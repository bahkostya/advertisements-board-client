import {
    FETCH_ADVERTISEMETS_REQUEST,
    FETCH_ADVERTISEMETS_SUCCESS,
    FETCH_OWN_ADVERTISEMETS_REQUEST,
    FETCH_OWN_ADVERTISEMETS_SUCCESS,
    FETCH_LOGOUT_SUCCESS,
} from '../actions';

export default function (state = {
    isFetching: false,
    data: [],
    ownData: [],
}, action) {
    switch (action.type) {
        case FETCH_ADVERTISEMETS_REQUEST:
        case FETCH_OWN_ADVERTISEMETS_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_ADVERTISEMETS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data,
            };
        case FETCH_OWN_ADVERTISEMETS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ownData: action.data,
            };
        case FETCH_LOGOUT_SUCCESS:
            return {
                ...state,
                ownData: [],
            };
        default:
            return state;
    }
}
