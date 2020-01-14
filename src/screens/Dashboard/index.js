import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, } from 'react-native';
import { View } from 'native-base';
// @ts-ignore
import styles from '../../styles/style_mobile';
import NotiBox from './Notibox';
import BoxHome from './BoxHome';
import Chart from './Chart';
import { dataBar, dataLine } from '../../containers/Dashboard/data';
import { TOKEN } from '../../constants/values';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
const DashboardScreen = ({ ...props }) => {

    return (<View style={styles.bg_primary}>
        <View style={styles.header_mobile}>
            <Image source={require('../../images/logo.png')} style={styles.logo_title} />
        </View>

        <View style={styles.content_body}>
            <ScrollView style={{ flex: 1, flexDirection: 'column', marginTop:30 }}> 
                <View style={styles.box_noti_dashboard}>
                    <View style={{ flex: 1 }}>
                        <NotiBox iconName={'link'} data={props.data1.OpenCount} title={'Open Count'} />
                        <NotiBox iconName={'images'} data={props.data1.HoldCount} title={'Hold Count'} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <NotiBox iconName={'box'} data={props.data1.InProgCount} title={'In Prog Count'} />
                        <NotiBox iconName={'images'} data={props.data1.CloseCount} title={'Close Count'} />
                    </View>
                </View>
                <Text style={styles.txt_title}>MY TASK</Text>
                <View style={styles.box_home}>
                    {props.onTask}
                </View>
            </ScrollView>
        </View>
    </View>);
};
export default DashboardScreen;
//# sourceMappingURL=index.js.map