import React from 'react';
import { View, Dimensions, Text, TextInput, TouchableOpacity, Picker, ScrollView, Switch } from 'react-native';
import styles from '../../styles/style_mobile';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import AsyncStorage from '@react-native-community/async-storage';
import toastr from '../../components/Toastr';
const BASE_URL = 'http://fiscentreon-unicorn1.paas.xplat.fpt.com.vn';
class AddTicket extends React.Component {
    static navigationOptions = {
        title: 'Thêm mới thiết bị',
    };
    state = {
        choosenIndex: 0,

    };
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            alias: '',
            ip: '',
            poller: [],
            isLoading: true,
            selectedValue: '',
        };
    }
    
    postData = async (schema) => {
        const fullUrl = `${BASE_URL}/hosts/add`;
        const value = await AsyncStorage.getItem('@TOKEN');
        this.setState({ isLoading: true })
        console.log(this.state)
        return axios({
            method: 'POST',
            data: {
                "api_id": 1,
                "host_name": this.state.name,
                "host_alias": this.state.alias,
                "host_ip": this.state.ip,
                "poller": this.state.selectedValue,
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: value,
            },
            url: fullUrl,
        }).then(response => {
            console.log('response', response.data);
            this.setState({ isLoading: false })
            this.props.navigation.goBack();
            toastr.showToast('Đăng ký thành công', 'ok');
            const camelizedJson = camelizeKeys(response.data);
            if (response.data.status_code !== 200) {
                return Promise.reject(camelizedJson);
            }
            return schema
                ? Object.assign({}, normalize(camelizedJson, schema))
                : camelizedJson;
        })
    };

    pickerItem = async (schema) => {
        const fullUrl = `${BASE_URL}/centreon/getListPoller`;
        const value = await AsyncStorage.getItem('@TOKEN');
        this.setState({ isLoading: true })
        return axios({
            method: 'POST',
            data: {
                "api_id": 1,
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: value,
            },
            url: fullUrl,
        }).then(response => {

            this.setState({
                isLoading: false,
                poller: response.data.data.result,
            })
            
            const camelizedJson = camelizeKeys(response.data);
            if (response.data.status_code !== 200) {
                return Promise.reject(camelizedJson);
            }
            return schema
                ? Object.assign({}, normalize(camelizedJson, schema))
                : camelizedJson;
        })
    };

    componentDidMount() {
        this.pickerItem();
    }

    render() {
        return (<View style={{
            backgroundColor: '#22252A',
            flex: 1,
        }}>
            <View style={styles.box_noti_ticket}>
                <View style={styles.box_content}>
                    <View style={styles.box_add_new_content}>
                        <ScrollView>
                            <Text style={styles.txt_box_add_new} >
                                Host basic infomation
                            </Text>
                            <View style={styles.form_add}>
                                <View style={styles.form_group}>
                                    <TextInput style={styles.form_control}
                                        placeholder="Hostname "
                                        placeholderTextColor='#fff'
                                        onChangeText={(text) => {
                                            this.setState({ name: text });
                                        }} />
                                </View>

                                <View style={styles.form_group}>
                                    <TextInput style={styles.form_control}
                                        placeholder="Alias  "
                                        placeholderTextColor='#fff'
                                        onChangeText={(text) => {
                                            this.setState({ alias: text });
                                        }} />
                                </View>

                                <View style={styles.form_group}>
                                    <TextInput style={styles.form_control}
                                        placeholder="Host IP "
                                        placeholderTextColor='#fff'
                                        onChangeText={(text) => {
                                            this.setState({ ip: text });
                                        }} />
                                </View>
                                <View style={styles.box_new_entry}>
                                    <View style={styles.form_group}>
                                        <Picker
                                            style={styles.form_control}
                                            selectedValue={this.state.selectedValue}
                                            onValueChange={(itemValue, itemPosition) =>
                                                this.setState({ selectedValue: itemValue, choosenIndex: itemPosition })}>
                                            {this.state.poller.map((item, key) =>
                                                <Picker.Item label={item.name} value={item.name} key={key} />
                                            )}
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.form_add}>
                                {/* <TouchableOpacity style={styles.btn_registration} onPress={() => this.postData()}>
                                    <Text style={styles.txt_btnLogin}>ĐĂNG KÝ</Text>
                                </TouchableOpacity> */}

                                <View style={styles.row_addTicket}>
                                    <TouchableOpacity style={styles.btn_save_Ticket} onPress={() => this.postData()}>
                                        <Text style={styles.txt_btnLogin}>ĐĂNG KÝ</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btn_reset_Ticket}>
                                        <Text style={styles.txt_btnLogin}>RESET</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </ScrollView>
                    </View>

                </View>
            </View>
        </View>
        );
    }
}

export default AddTicket;