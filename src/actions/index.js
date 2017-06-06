import api from '../api';

export const FETCH_ADVERTISEMETS_REQUEST = 'FETCH_ADVERTISEMETS_REQUEST';
export const FETCH_ADVERTISEMETS_SUCCESS = 'FETCH_ADVERTISEMETS_SUCCESS';

export const fetchAdvertisementsRequest = () => ({
    type: FETCH_ADVERTISEMETS_REQUEST,
});

export const fetchAdvertisementsSuccess = data => ({
    type: FETCH_ADVERTISEMETS_SUCCESS,
    data,
});

export const fetchAllAdvertisements = () => async dispatch => {
    await dispatch(fetchAdvertisementsRequest());

    const allAdvertisements = await api.getAllAdvertisements();

    if (!Object.hasOwnProperty.call(allAdvertisements, 'error')) {
        await dispatch(fetchAdvertisementsSuccess(allAdvertisements));
    }
};

export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAIL = 'FETCH_LOGIN_FAIL';

export const fetchLoginRequest = () => ({
    type: FETCH_LOGIN_REQUEST,
});

export const fetchLoginSuccess = () => ({
    type: FETCH_LOGIN_SUCCESS,
});

export const fetchLoginFail = () => ({
    type: FETCH_LOGIN_FAIL,
});

export const fetchLogin = (username, password) => async dispatch => {
    await dispatch(fetchLoginRequest());

    const response = await api.login(username, password);

    if (response) {
        await dispatch(fetchLoginSuccess());
    } else {
        await dispatch(fetchLoginFail());
    }

    return response;
};


export const FETCH_LOGOUT_REQUEST = 'FETCH_LOGOUT_REQUEST';
export const FETCH_LOGOUT_SUCCESS = 'FETCH_LOGOUT_SUCCESS';
export const FETCH_LOGOUT_FAIL = 'FETCH_LOGOUT_FAIL';

export const fetchLogoutRequest = () => ({
    type: FETCH_LOGOUT_REQUEST,
});

export const fetchLogoutSuccess = () => ({
    type: FETCH_LOGOUT_SUCCESS,
});

export const fetchLogoutFail = () => ({
    type: FETCH_LOGOUT_FAIL,
});

export const fetchLogout = () => async dispatch => {
    await dispatch(fetchLogoutRequest());

    const response = await api.logout();

    if (response) {
        await dispatch(fetchLogoutSuccess());
    } else {
        await dispatch(fetchLogoutFail());
    }

    return response;
};

export const FETCH_OWN_ADVERTISEMETS_REQUEST = 'FETCH_OWN_ADVERTISEMETS_REQUEST';
export const FETCH_OWN_ADVERTISEMETS_SUCCESS = 'FETCH_OWN_ADVERTISEMETS_SUCCESS';

export const fetchMyAdvertisementsRequest = () => ({
    type: FETCH_OWN_ADVERTISEMETS_REQUEST,
});

export const fetchMyAdvertisementsSuccess = data => ({
    type: FETCH_OWN_ADVERTISEMETS_SUCCESS,
    data,
});

export const fetchMyAdvertisements = () => async dispatch => {
    await dispatch(fetchMyAdvertisementsRequest());

    const allAdvertisements = await api.getMyAdvertisements();

    if (!Object.hasOwnProperty.call(allAdvertisements, 'error')) {
        await dispatch(fetchMyAdvertisementsSuccess(allAdvertisements));
    }
};

export const FETCH_PUBLISH_ADVERTISEMET_REQUEST = 'FETCH_PUBLISH_ADVERTISEMET_REQUEST';
export const FETCH_PUBLISH_ADVERTISEMET_SUCCESS = 'FETCH_PUBLISH_ADVERTISEMET_SUCCESS';

export const fetchPublishAdvertisementRequest = () => ({
    type: FETCH_PUBLISH_ADVERTISEMET_REQUEST,
});

export const fetchPublishAdvertisementSuccess = data => ({
    type: FETCH_PUBLISH_ADVERTISEMET_SUCCESS,
    data,
});

export const fetchPublishAdvertisement = (title, price, description) => async dispatch => {
    await dispatch(fetchPublishAdvertisementRequest());

    const res = await api.publishAdvertisement(title, price, description);

    if (!Object.hasOwnProperty.call(res, 'error')) {
        await dispatch(fetchPublishAdvertisementSuccess(res));
    }

    return res;
};

export const FETCH_DELETE_ADVERTISEMET_SUCCESS = 'FETCH_DELETE_ADVERTISEMET_SUCCESS';

export const fetchDeleteAdvertisementSuccess = id => ({
    type: FETCH_DELETE_ADVERTISEMET_SUCCESS,
    id,
});

export const fetchDeleteAdvertisement = id => async dispatch => {
    const res = await api.deleteAdvertisement(id);

    if (!Object.hasOwnProperty.call(res, 'error')) {
        await dispatch(fetchDeleteAdvertisementSuccess(id));
    }

    return res;
};

export const FETCH_EDIT_ADVERTISEMET_SUCCESS = 'FETCH_EDIT_ADVERTISEMET_SUCCESS';

export const fetchEditAdvertisementSuccess = data => ({
    type: FETCH_EDIT_ADVERTISEMET_SUCCESS,
    data,
});

export const fetchEditAdvertisement = (id, title, price, description) => async dispatch => {
    const res = await api.updateAdvertisement(id, title, price, description);

    if (!Object.hasOwnProperty.call(res, 'error')) {
        await dispatch(fetchEditAdvertisementSuccess(res));
    }

    return res;
};
