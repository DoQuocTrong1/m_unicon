// @ts-ignore
import * as actionTypes from './actionTypes';
import { CALL_API } from '../../middleware/api';
import AsyncStorage from '@react-native-community/async-storage';
import { TOKEN } from '../../constants/value';
export const dataList = (vakue) => ({
    const value = await AsyncStorage.getItem('@TOKEN')  
    [CALL_API]: {
        types: [
            actionTypes.NEW_REFRESH_TOKEN,
            actionTypes.NEW_REFRESH_SUCCESS,
            actionTypes.NEW_REFRESH_FAILURE,
        ],
        endpoint: 'hosts/listhost',
        data:null,
        method: 'POST',
        token: value,
    },
});

export const data = (token) => (dispatch) => {
    return dispatch(dataList(token));
};
