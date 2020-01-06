import * as React from 'react';
import TicketScreen from '../../screens/Ticket';
import AsyncStorage from '@react-native-community/async-storage';
import TOKEN from '../../constants/values';
import { FlatList, RefreshControl, View } from 'react-native';
import { Button, Text } from 'native-base';
import axios from 'axios';
const BASE_URL = 'http://kong8000-unicorn1.paas.xplat.fpt.com.vn/';
import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import styles from '../../styles/style_mobile';

function Item({ name, activate }) {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderColor: '#fff',
            marginBottom: 10
        }}>
            <Text style={{
                color: '#fff',
                flex: 3,
                height: 60, width: '70%',
                textAlign: 'left',
            }}>{name}</Text>
            <Text style={{
                color: '#fff',
                flex: 1,
                height: 60,
                textAlign: 'right',
            }}>{activate}</Text>
        </View>
    );
}

const getCustomers = () => {
    debugger;
    return (dispatch) => {
        dispatch(setCustomerLoading)
        axios
            .get('https://calm-sands-26165.herokuapp.com/api/customers')
            .then(res =>
                dispatch({
                    type: GET_CUSTOMERS,
                    payload: res.data,
                })
            )
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: null
                })
            );
    };
}

class Ticket extends React.Component {
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

        const list = (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => <Item
                    name={item.name}
                    activate={item.activate} />}
                keyExtractor={item => item.id}
            />
        );
        return (
            // <Button onPress={this.callApi}><Text>123124</Text></Button>
            <TicketScreen flatList={list} />
        );
    }
}
export default Ticket;
//# sourceMappingURL=index.js.map