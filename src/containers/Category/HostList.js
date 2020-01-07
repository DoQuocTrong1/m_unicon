import * as React from 'react';
import { Component } from 'react';
import { View, Dimensions,FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button, Text } from 'native-base';
import axios from 'axios';
import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
const BASE_URL = 'http://kong8000-unicorn1.paas.xplat.fpt.com.vn/';

function Item({ name, address }) {
    return (
        <View style={{
            flex: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderColor: '#fff',
            marginBottom: 10
        }}>
            <Text style={{
                color: '#fff',
                flex: 3,
                height: 100,
                textAlign: 'left',
            }}>{name}</Text>
            <Text style={{
                color: '#fff',
                flex: 2,
                textAlign: 'right',
                borderLeftWidth: 1,
                borderColor: '#fff',
                alignItems: 'center'
            }}>{address}</Text>
        </View>
    );
}
export default class Host extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, data: "" }
    }
    callApi = async (schema) => {
        const fullUrl = `${BASE_URL}hosts/listhost`;
        const value = await AsyncStorage.getItem('@TOKEN');
        return axios({
            method: 'POST',
            data: { "api_id": 1 },
            headers: {
                'Content-Type': 'application/json',
                Authorization: value,
            },
            url: fullUrl,
        }).then(response => {
            console.log('response', response.data.data);
            this.setState({
                isLoading: false,
                data: response.data.data,
            })
            const camelizedJson = camelizeKeys(response.data);
            if (response.data.status_code !== 200) {
                return Promise.reject(camelizedJson);
            }
            return schema
                ? Object.assign({}, normalize(camelizedJson, schema))
                : camelizedJson;
        });
    };
    componentDidMount() {
        this.callApi();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <Item
                        name={item.name}
                        address={item.address} />}
                    keyExtractor={item => item.id}
                    initialNumToRender={20}
                />
            </View>
        )
    }
}