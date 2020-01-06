// @ts-ignore
import * as actionTypes from './actionTypes';
import {CALL_API} from '../../middleware/api';

interface dispatch {
    (arg0: { "Call API": { types: string[]; endpoint: string; data: Object; method: string; }; }): any
}

export const doLogin = (user: Object) => ({
    [CALL_API]: {
        types: [
            actionTypes.LOGIN,
            actionTypes.LOGIN_SUCCESS,
            actionTypes.LOGIN_FAILURE,
        ],
        endpoint: 'login',
        data: user,
        method: 'POST',
    },
});

const fetchNewRefreshToken = (user: Object) => ({
    [CALL_API]: {
        types: [
            actionTypes.NEW_REFRESH_TOKEN,
            actionTypes.NEW_REFRESH_SUCCESS,
            actionTypes.NEW_REFRESH_FAILURE,
        ],
        endpoint: 'newRefreshToken',
        data: user,
        method: 'POST',
    },
});

export const login = (user: Object) => (dispatch: dispatch) => {
    return dispatch(doLogin(user));
};

export const newRefreshToken = (user: Object) => (dispatch: dispatch) => {
    return dispatch(fetchNewRefreshToken(user));
};
