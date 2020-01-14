import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Content, View, Text } from 'native-base';
// @ts-ignore
import styles from '../../styles/style_mobile';
const Login = ({ ...props }) => (<Container style={styles.bg_primary}>
        <Content>
            <View style={styles.login_logo}>
                <Image style={styles.logo} source={require('../../images/logo1.png')}/>
            </View>
            <View>
                {props.loginForm}
            </View>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn_login} onPress={() => props.onLogin()}>
                    <Text style={styles.txt_btnLogin}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_gotpass}>
                    <Text style={styles.txt_forgotpass}>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>
        </Content>
    </Container>);
export default Login;
//# sourceMappingURL=index.js.map