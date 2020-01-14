import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList, View, ActivityIndicator, } from 'react-native';
import { Button, Text } from 'native-base';
import axios from 'axios';
import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import { ListItem, SearchBar } from 'react-native-elements';
const BASE_URL = 'http://fiscentreon-unicorn1.paas.xplat.fpt.com.vn/';


export default class ListHost extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, data: [] };
    }
    static navigationOptions = {
        header: null,
    };
    componentDidMount() {
        this.callListHost();
    }
    searchFilterFunction = text => {
        this.setState({
            value: text,
        });
        const newData = this.state.data.filter(item => {
            const itemData = `${item.name.toUpperCase()} ${item.address.toUpperCase()} `;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
        });
    };

    callListHost = async (schema) => {
        const fullUrl = `${BASE_URL}centreon/hosts/listhost`;
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
                data: response.data.data.result,
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

    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Nhập từ khóa cần tìm kiếm"
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
                onClear={this.callApi}
            />
        );
    };
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '86%',
                    backgroundColor: '#2d3035',
                    marginLeft: '14%',
                }}
            />
        );
    };
    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.name}
                        subtitle={item.address}
                        titleStyle={{ color: 'white', fontWeight: 'bold' }}
                        subtitleStyle={{ color: 'gray' }}
                        bottomDivider
                        containerStyle={{ backgroundColor: '#000' }}
                    />
                )}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={this.renderSeparator}
                initialNumToRender={20}
                contentContainerStyle={{ paddingBottom: 60 }}
                ListHeaderComponent={this.renderHeader} />
        );
    }
}

//# sourceMappingURL=Chart.js.map