import * as React from 'react';
import { Image, Text, TextInput, FlatList } from 'react-native';
import { View } from 'native-base';

import styles from '../../styles/style_mobile';
import data from '../../containers/Notification/data';

function Item({ title, time }) {
    return (
        <View style={styles.notification_content}>
            <Text style={styles.notification_heading}>{title}</Text>
            <Text style={styles.notification_text}>{time}</Text>
        </View>
    );
}

const NotigicationScreen = ({ }) => {
    return (
        <View style={styles.bg_primary}>
            <View style={styles.header_mobile}>
                <Text style={styles.title_ticket}>Thông báo</Text>
            </View>
            <View style={styles.content_body}>
                <View style={styles.box_home}>
                    <View style={styles.box_content}>
                        <View style={styles.box_noti}>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <Item
                                    title={item.title}
                                    time={item.time} />}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}
export default NotigicationScreen;


