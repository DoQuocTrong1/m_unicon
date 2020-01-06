import React from 'react';
import { View, Text } from 'native-base';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome5';
// @ts-ignore
import styles from '../../styles/style_mobile';
const NotiBox = ({ iconName, data }) => {
    return (<View style={styles.col_xs_4}>
            <View style={styles.box_item}>
                <View style={styles.icon_noti}>
                    <Icon name={iconName} size={40} color={'#F17128'}/>
                    <Text style={styles.txt_noti}>{data}</Text>
                </View>
            </View>
        </View>);
};
export default NotiBox;
//# sourceMappingURL=Notibox.js.map