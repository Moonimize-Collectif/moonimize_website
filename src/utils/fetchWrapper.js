// import { disconnectUser } from './functions';
// import {config} from '../../public'

export const fetchWrapper = {
    get,
    post,
    patch,
    delete: _delete,
};

function get(url, retry = true, router = null) {
    const headers = new Headers();

    if (typeof window !== 'undefined') {
        const xsrfToken = localStorage.getItem('xsrf');
        headers.append('x-xsrf-token', xsrfToken);
    }

    const requestOptions = {
        method: 'GET',
        headers,
        credentials: 'include',
    };

    return fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
        requestOptions
    ).then(async (response) => {
        const data = JSON.parse(await response.text());

        if (!response.ok && retry) {
            if (
                data.message === 'JsonWebTokenError: invalid token' ||
                data.message === 'TokenExpiredError: jwt expired' ||
                data.message === 'You are not logged in'
            ) {
                const refresh = await post(`users/refresh`);

                if (refresh.status === 'success') {
                    delete refresh.user.passwordResetToken;
                    delete refresh.user.passwordChangedAt;
                    delete refresh.user.passwordResetExpires;
                    delete refresh.user.fav;
                    delete refresh.user.__v;

                    localStorage.setItem('xsrf', refresh.xsrfToken);
                    localStorage.setItem('user', JSON.stringify(refresh.user));

                    return get(url, false);
                } else {
                    return disconnectUser(router);
                }
            }
        }

        return data;
    });
}

function post(url, body, retry = true, router = null, isFormData = false) {
    const headers = new Headers();
    if (!isFormData) {
        headers.append('Content-Type', 'application/json');
    }

    if (typeof window !== 'undefined') {
        const xsrfToken = localStorage.getItem('xsrf');
        headers.append('x-xsrf-token', xsrfToken);
    }

    const requestOptions = {
        method: 'POST',
        headers,
        body: isFormData ? body : JSON.stringify(body),
        credentials: 'include',
    };

    return fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
        requestOptions
    ).then(async (response) => {
        const data = JSON.parse(await response.text());

        if (!response.ok && retry) {
            if (
                data.message === 'JsonWebTokenError: invalid token' ||
                data.message === 'TokenExpiredError: jwt expired' ||
                data.message === 'You are not logged in'
            ) {
                const refresh = await post(`users/refresh`);

                if (refresh.status === 'success') {
                    delete refresh.user.passwordResetToken;
                    delete refresh.user.passwordChangedAt;
                    delete refresh.user.passwordResetExpires;
                    delete refresh.user.fav;
                    delete refresh.user.__v;

                    localStorage.setItem('xsrf', refresh.xsrfToken);
                    localStorage.setItem('user', JSON.stringify(refresh.user));

                    return post(url, body, false, router, isFormData);
                } else {
                    return disconnectUser(router);
                }
            }
        }

        return data;
    });
}

function patch(url, body, retry = true, router = null, isFormData = false) {
    const headers = new Headers();
    if (!isFormData) {
        headers.append('Content-Type', 'application/json');
    }

    if (typeof window !== 'undefined') {
        const xsrfToken = localStorage.getItem('xsrf');
        headers.append('x-xsrf-token', xsrfToken);
    }

    const requestOptions = {
        method: 'PATCH',
        headers,
        body: isFormData ? body : JSON.stringify(body),
        credentials: 'include',
    };

    return fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
        requestOptions
    ).then(async (response) => {
        const data = JSON.parse(await response.text());

        if (!response.ok && retry) {
            if (
                data.message === 'JsonWebTokenError: invalid token' ||
                data.message === 'TokenExpiredError: jwt expired' ||
                data.message === 'You are not logged in'
            ) {
                const refresh = await post(`users/refresh`);

                if (refresh.status === 'success') {
                    delete refresh.user.passwordResetToken;
                    delete refresh.user.passwordChangedAt;
                    delete refresh.user.passwordResetExpires;
                    delete refresh.user.fav;
                    delete refresh.user.__v;

                    localStorage.setItem('xsrf', refresh.xsrfToken);
                    localStorage.setItem('user', JSON.stringify(refresh.user));

                    return patch(url, body, false);
                } else {
                    return disconnectUser(router);
                }
            }
        }

        return data;
    });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url, retry = true, router = null) {
    const headers = new Headers();

    if (typeof window !== 'undefined') {
        const xsrfToken = localStorage.getItem('xsrf');
        headers.append('x-xsrf-token', xsrfToken);
    }

    const requestOptions = {
        method: 'DELETE',
        headers,
        credentials: 'include',
    };

    return fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
        requestOptions
    ).then(async (response) => {
        const data = JSON.parse(await response.text());

        if (!response.ok && retry) {
            if (
                data.message === 'JsonWebTokenError: invalid token' ||
                data.message === 'TokenExpiredError: jwt expired' ||
                data.message === 'You are not logged in'
            ) {
                const refresh = await post(`users/refresh`);

                if (refresh.status === 'success') {
                    delete refresh.user.passwordResetToken;
                    delete refresh.user.passwordChangedAt;
                    delete refresh.user.passwordResetExpires;
                    delete refresh.user.fav;
                    delete refresh.user.__v;

                    localStorage.setItem('xsrf', refresh.xsrfToken);
                    localStorage.setItem('user', JSON.stringify(refresh.user));

                    return _delete(url, false);
                } else {
                    return disconnectUser(router);
                }
            }
        }

        return data;
    });
}
