import URLSearchParams from 'url-search-params';

const API_PREFIX = 'http://localhost:8080';

async function getAllAdvertisements() {
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(
        `${API_PREFIX}/advertisements`,
        fetchOptions,
    );

    return response.json();
}

async function login(username, password) {
    const params = {
        username,
        password,
        grant_type: 'password',
    };

    const searchParams = new URLSearchParams();

    Object.keys(params).forEach(prop => searchParams.set(prop, params[prop]));

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        credentials: 'include',
        body: searchParams,
    };

    const response = await fetch(
        `${API_PREFIX}/login`,
        fetchOptions,
    );

    return response.ok;
}

async function logout() {
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
    };

    const response = await fetch(
        `${API_PREFIX}/logout`,
        fetchOptions,
    );

    return response.ok;
}

async function getAdvertisementById(id) {
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(
        `${API_PREFIX}/advertisement/${id}`,
        fetchOptions,
    );

    return response.json();
}

async function getMyAdvertisements() {
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    };

    const response = await fetch(
        `${API_PREFIX}/secured`,
        fetchOptions,
    );

    return response.json();
}

async function publishAdvertisement(name, price, description) {
    const newAdvertisement = {
        name,
        price,
        description,
        location: 'KIEV',
    };

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(newAdvertisement),
    };

    const response = await fetch(
        `${API_PREFIX}/secured`,
        fetchOptions,
    );

    return response.json();
}

async function deleteAdvertisement(id) {
    const fetchOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    };

    const response = await fetch(
        `${API_PREFIX}/secured/${id}`,
        fetchOptions,
    );

    return response.json();
}


async function updateAdvertisement(id, name, price, description) {
    const newAdvertisement = {
        id,
        name,
        price,
        description,
        location: 'KIEV',
    };

    const fetchOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(newAdvertisement),
    };

    const response = await fetch(
        `${API_PREFIX}/secured`,
        fetchOptions,
    );

    return response.json();
}

export default {
    getAllAdvertisements,
    login,
    logout,
    getAdvertisementById,
    getMyAdvertisements,
    publishAdvertisement,
    deleteAdvertisement,
    updateAdvertisement,
};
