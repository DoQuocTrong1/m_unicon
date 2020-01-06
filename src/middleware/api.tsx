import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import {normalize} from 'normalizr';
// @ts-ignore
import {camelizeKeys} from 'humps';

import {REFRESH_TOKEN} from '../constants/values';

const BASE_URL = 'http://kong8000-unicorn1.paas.xplat.fpt.com.vn/';
export const CALL_API = 'Call API';

interface actionWith {
    type: string,
    success?: any,
    error?: any
}

interface callApi {
    (endpoint: string, method: string | any, data: string, token: string, schema?: any): Promise<{}>;
}

// @ts-ignore
axios.interceptors.response.use(null, async error => {
    if (error.config && error.response && error.response.status === 405) {
        const credentials = await Keychain.getGenericPassword();
        const responseRefreshToken = await axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            url: `${BASE_URL}refreshToken`,
            data: {
                // @ts-ignore
                refreshToken: credentials.password,
                token: error.config.headers.Authorization,
            },
        });
        error.config.headers.Authorization = responseRefreshToken.data.token;
        await Keychain.setGenericPassword(
            REFRESH_TOKEN,
            responseRefreshToken.data.refreshToken,
        );
        return await axios.request(error.config);
    }
    return Promise.reject(error);
});

const callApi: callApi = (endpoint, method, data, token, schema) => {
    const fullUrl = `${BASE_URL}${endpoint}`;
    return axios({
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        url: fullUrl,
        data,
    }).then(response => {
        console.log('response', response);
        const camelizedJson = camelizeKeys(response.data);
        if (response.data.status_code !== 200) {
            return Promise.reject(camelizedJson);
        }
        return schema
            ? Object.assign({}, normalize(camelizedJson, schema))
            : camelizedJson;
    });
};

export default () => (next: (arg0: any) => void) => (action: { [x: string]: any; }) => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let {endpoint, method, data, token, schema} = callAPI;
    const {types} = callAPI;
    const actionWith = (data: actionWith) => {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    };

    const [requestType, successType, failureType] = types;
    next(actionWith({type: requestType}));

    return callApi(endpoint, method, data, token, schema).then(
        response =>
            next(
                actionWith({
                    success: response,
                    type: successType,
                }),
            ),
        error =>
            next(
                actionWith({
                    type: failureType,
                    error: error,
                }),
            ),
    );
};
