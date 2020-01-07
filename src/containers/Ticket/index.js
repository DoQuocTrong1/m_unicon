import * as React from 'react';
import TicketScreen from '../../screens/Ticket';
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { Button, Text } from 'native-base';
import axios from 'axios';
import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import styles from '../../styles/style_mobile';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddTicket from './AddTicket';
import { ListItem, SearchBar } from 'react-native-elements';
const BASE_URL = 'http://fiscentreon-unicorn1.paas.xplat.fpt.com.vn/';

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

class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, data: [] };
        this.arrayholder = [];
    }
    static navigationOptions = {
        header: null,
    };
    componentDidMount() {
        this.callApi();
    }

    callApi = async (schema) => {
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

    addTicket() {
        this.props.navigation.navigate('Profile')
    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '86%',
                    backgroundColor: '#CED0CE',
                    marginLeft: '14%',
                }}
            />
        );
    };

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

    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Type Here..."
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
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
        const list = (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.name}
                        subtitle={item.address}
                    />
                )}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader} />
        );
        return (
            <TicketScreen flatList={list} onAdd={() => this.addTicket()} />
        );
    }
}

const MainNavigator = createStackNavigator({
    Ticket: { screen: Ticket },
    Profile: { screen: AddTicket },
},
    {
        initialRouteName: 'Ticket',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#22252A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 22,
                marginLeft: '15%'
            },
        },
    });

const Tickets = createAppContainer(MainNavigator);

export default Tickets;
// export default Ticket;
//# sourceMappingURL=index.js.map