import * as React from 'react';
import { Image, Text, TextInput, ScrollView, FlatList } from 'react-native';
import { View } from 'native-base';

import styles from '../../styles/style_mobile';
import Icon from 'react-native-vector-icons/Ionicons';

const TicketScreen = ({ ...props }) => {
    return (<View style={styles.bg_primary}>
        <View style={styles.header_mobile}>
            <Text style={styles.title_ticket}>Ticket</Text>
        </View>

        <View style={styles.box_home}>
            <View style={styles.box_content}>
                <View style={styles.form_group}>
                    <TextInput
                        style={styles.form_control}
                        placeholder="Nhập từ khóa cần tìm kiếm"
                        underlineColorAndroid="transparent"
                        placeholderTextColor={'#fff'}
                    />
                    <Icon.Button style={styles.searchIcon} name="ios-search" size={25} color="#fff" backgroundColor='#22252A' />
                </View>
                <View style={styles.box_list_content}>
                    {props.flatList}
                </View>
            </View>
        </View>
    </View>
    )
}
export default TicketScreen;


