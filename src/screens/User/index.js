import * as React from 'react';
import { Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'native-base';

import styles from '../../styles/style_mobile';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import LoginScreen from '../../containers/Login';
const UserScreen = ({...props }) => {
    return (
        <View style={styles.bg_primary}>
            <View style={styles.header_mobile}>
                <Text style={styles.title_ticket}>Thông tin tài khoản</Text>
            </View>
            <View style={styles.content_body}>
                <View style={styles.box_home}>
                    <View style={styles.box_menu}>
                        <TouchableOpacity style={styles.btn_user}
                            onPress={() => navigate('Detail')}>
                            <Text style={styles.txt_btn_user}>Thông tin cá nhân </Text>
                            <Icon name="chevron-right" color='#fff' size={18} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn_user}>
                            <Text style={styles.txt_btn_user}>Đổi mật khẩu </Text>
                            <Icon name="chevron-right" color='#fff' size={18} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn_user}  onPress={() => props.onLogout()}>
                            <Text style={styles.txt_btn_user}>Thoát tài khoản </Text>
                            <Icon name="chevron-right" color='#fff' size={18} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


export default UserScreen;


