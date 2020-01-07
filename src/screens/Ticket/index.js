import * as React from 'react';
import { Image, Text, TextInput, ScrollView, FlatList, Button } from 'react-native';
import { View } from 'native-base';

import styles from '../../styles/style_mobile';
import Icon from 'react-native-vector-icons/Ionicons';

const TicketScreen = ({ ...props }) => {
    return (<View style={styles.bg_primary}>
        <View style={styles.header_mobile}>
            <Text style={styles.title_ticket}>Ticket</Text>
            <Icon.Button
                name='md-add'
                color='#F17128'
                backgroundColor='#22252A'
                size={30}
                style={styles.btn_add}
                onPress={() => props.onAdd()}
            />
        </View>

        <View style={styles.box_home}>
            <View style={styles.box_content}>
                
                <View style={styles.box_list_content}>
                    {props.flatList}                  
                </View>
            </View>
        </View>
    </View>
    )
}
export default TicketScreen;


