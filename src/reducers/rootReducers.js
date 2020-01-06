import { combineReducers } from 'redux';
import { reducer as loginReducer } from '../containers/Login/reducers';
// @ts-ignore
import { reducer as formReducer } from 'redux-form';
import { RESET_ERROR_MESSAGE } from '../constants/values';
const errorMessage = (state = null, action) => {
    const { type, error } = action;
    if (type === RESET_ERROR_MESSAGE) {
        return null;
    }
    else if (error) {
        return error;
    }
    return state;
};
export default combineReducers({
    form: formReducer,
    loginReducer,
    errorMessage,
});
//# sourceMappingURL=rootReducers.js.map