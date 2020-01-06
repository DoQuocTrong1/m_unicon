// @ts-ignore
import * as actionTypes from './actionTypes';
import { CALL_API } from '../../middleware/api';
export const doLogin = (user) => ({
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
const fetchNewRefreshToken = (user) => ({
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
export const login = (user) => (dispatch) => {
    return dispatch(doLogin(user));
};
export const newRefreshToken = (user) => (dispatch) => {
    return dispatch(fetchNewRefreshToken(user));
};
//# sourceMappingURL=actions.js.map