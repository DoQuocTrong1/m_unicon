import * as React from 'react';
import { TextInput, View } from 'react-native';
import { Icon, Form } from 'native-base';
// @ts-ignore
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
// @ts-ignore
import { connect } from 'react-redux';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-community/async-storage';
import Login from '../../screens/Login';
import validators from '../../validators';
import * as loginAction from './actions';
import toastr from '../../components/Toastr';
// @ts-ignore
import styles from '../../styles/style_mobile';
// @ts-ignore
import componentRounded from '../../styles/component-rounded';
// @ts-ignore
import * as actionTypes from './actionTypes';
import { REFRESH_TOKEN, TOKEN } from '../../constants/values';
export class LoginForm extends React.Component {
    constructor(props) {
        // @ts-ignore
        super(props);
        this.login = this.login.bind(this);
    }
    // @ts-ignore
    renderInput({ input, meta: { touched, error } }) {
        return (<View style={styles.form_group}
            // @ts-ignore
            error={error && touched}>
            <Icon active name={input.name === 'username' ? 'person' : 'unlock'} style={[
                styles.searchIcon,
                error && touched ? componentRounded.red : componentRounded.gray,
            ]} />
            <TextInput style={styles.form_control} placeholder={input.name === 'username' ? 'Username' : 'Password'}
                underlineColorAndroid="transparent"
                placeholderTextColor={error && touched ? '#f36a5a' : '#BFBFBF'}
                secureTextEntry={input.name === 'password'} {...input} />
        </View>);
    }
    async login() {
        try {
            if (this.props.valid) {
                const user = {
                    username: this.props.username,
                    password: this.props.password,
                };
                const responseLogin = await this.props.actions.login(user);
                console.log('responseLogin', responseLogin);
                if (responseLogin.type === actionTypes.LOGIN_SUCCESS) {
                    const responseRefreshToken = await this.props.actions.newRefreshToken(user);
                    await Keychain.setGenericPassword(REFRESH_TOKEN, responseRefreshToken.success.refreshToken);
                    await AsyncStorage.setItem(TOKEN, responseLogin.success.token);    
                    this.props.navigation.navigate('App');
                }
                else {
                    toastr.showToast(responseLogin.error.message, 'danger');
                }
            }
            else {
                toastr.showToast('Enter valid Username & Password', 'danger');
            }
        }
        catch (err) {
            console.log('err', err);
            toastr.showToast('Some error occurred!', 'danger');
        }
    }
    render() {
        const form = (<Form>
            <Field name="username" component={this.renderInput} validate={[validators.required]} />
            <Field name="password" component={this.renderInput} validate={[validators.required]} />
        </Form>);
        return <Login loginForm={form} onLogin={() => this.login()} />;
    }
}
const LoginContainer = reduxForm({
    form: 'login',
})(LoginForm);
const selector = formValueSelector('login');
function mapStateToProps(state) {
    const username = selector(state, 'username');
    const password = selector(state, 'password');
    return {
        user: state.loginReducer,
        username,
        password,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginAction, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
//# sourceMappingURL=index.js.map