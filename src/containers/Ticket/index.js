import * as React from 'react';
import TicketScreen from '../../screens/Ticket';
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList, View, ActivityIndicator, } from 'react-native';
import { Button, Text } from 'native-base';
import axios from 'axios';
import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddTicket from './AddTicket';
import DetailTicket from '../TicketDetail/index';
import styles from '../../styles/style_mobile';
import { ListItem, SearchBar, Card, Icon } from 'react-native-elements';
const BASE_URL = 'http://kong8000-unicorn1.paas.xplat.fpt.com.vn/';


class Ticket extends React.Component {
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

    callListHost = async (schema) => {
        const fullUrl = `${BASE_URL}sdm/getlistmyticket`;
        const value = await AsyncStorage.getItem('@TOKEN');
        return axios({
            method: 'POST',
            data: {
                "api_id": 3,
                "sID": 12122112,
                "status": "OP",
                "type": "I"
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: value,
            },
            url: fullUrl,
        }).then(response => {
            console.log('response', response.data);
            const camelizedJson = camelizeKeys(response.data);
            this.setState({
                isLoading: false,
                data: response.data,
            })


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
                    backgroundColor: '#2d3035',
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
            const itemData = `${item.Summary.toUpperCase()} `;
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
                placeholder="Nhập từ khóa cần tìm kiếm"
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
                onClear={this.callListHost}
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
                data={camelizeKeys(this.state.data)}
                renderItem={({ item }) => (<Card
                    containerStyle={{
                        backgroundColor: '#2d3035',
                        padding: 5, margin: 0,
                        marginTop: 5,
                        borderWidth: 0,
                        marginBottom: 50
                    }}>
                    <View style={styles.box_list}>
                        <View style={styles.header_list}>
                            <View style={styles.left_header_list}>
                                <Text style={styles.txt_leftTitel}>{item.refNum}</Text>
                                <Text style={styles.txt_left}>{item.status}</Text>
                            </View>
                            <View style={styles.right_header_list}>
                                <Text style={styles.txt_rightTitel}>{item.dateTicket}</Text>
                                <Text style={styles.txt_right}>Trouble shoot</Text>
                            </View>
                        </View>
                        <View style={styles.body_list}>
                            <Text style={styles.txt_bodyList_title}>{item.summary}</Text>
                            <Text style={styles.txt_bodyList}>{item.description}</Text>
                            <Text style={styles.txt_bodyList}>Người xử lý: DucPH</Text>
                            <Text style={styles.txt_bodyList}>Người xử lý: DucPH</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                            <Button style={{ borderColor: 'gray', width: 150, }} bordered
                                onPress={() => this.props.navigation.navigate('Detail', { refNum: item.refNum })}>
                                <Text style={{ flex: 1, textAlign: 'center', color: 'gray' }}>In Process</Text></Button>
                        </View>
                    </View>
                </Card>)}
                keyExtractor={item => item.refNum}
                ItemSeparatorComponent={this.renderSeparator}
                initialNumToRender={20}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
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
    Detail: { screen: DetailTicket },
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