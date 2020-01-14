import React, { Component } from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import styles from '../../styles/style_mobile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class DetailTicket extends Component {



    render() {
        return (
            <View style={styles.bg_primary}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.box_home}>
                        <View style={styles.table_panle}>
                            <View style={styles.panel_default}>
                                <View style={styles.panel_heading}>
                                    <Text style={styles.panel_title}>Lỗi PC</Text>
                                </View>
                                <View style={styles.panel_body}>
                                    <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                    <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                    <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                    <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                    <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                </View>
                            </View>

                            <View style={styles.panel_default}>
                                <View style={styles.panel_heading}>
                                    <Text style={styles.panel_title}>Detail</Text>
                                </View>
                                <View style={styles.panel_body}>
                                    <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                    <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                    <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                    <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                    <Text style={styles.panel_txtBody}>Người yêu cầu: cuongNM</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

