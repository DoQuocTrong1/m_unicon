import * as React from 'react';
import DashboardScreen from '../../screens/Dashboard';
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList, ActivityIndicator, YellowBox } from 'react-native';
import axios from 'axios';
import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
import styles from '../../styles/style_mobile';
const BASE_URL = 'http://kong8000-unicorn1.paas.xplat.fpt.com.vn/';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, data1: [], data2: [] };
    }
    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        this.callListHost();
        YellowBox.ignoreWarnings([
            'VirtualizedLists should never be nested', 
        ])
    }

    callListHost = async () => {
        const fullUrl = `${BASE_URL}sdm/GetSummaryMyTicket`;
        const value = await AsyncStorage.getItem('@TOKEN');
        return axios({
            method: 'POST',
            data: { "api_id": 3, "sID": 14004447 },
            headers: {
                'Content-Type': 'application/json',
                Authorization: value,
            },
            url: fullUrl,
        }).then(response => {

            this.setState({
                isLoading: false,
                data1: response.data.TicketStatus,
                data2: response.data.TicketType,
            })
            console.log('data1', this.state.data1);
            console.log('data2', this.state.data2);
            const camelizedJson = camelizeKeys(response.data);
        });
    };

    _renderHeader(item, expanded) {
        return (
            <View style={styles.btn_task}>
                <Text style={styles.txt_title}>
                    {item.title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 20, color: '#fff' }} name="ios-arrow-dropup" />
                    : <Icon style={{ fontSize: 20, color: '#fff' }} name="ios-arrow-dropdown" />}
            </View>
        );
    }
    _renderContent(item) {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.txt_Task}>
                    Open
                </Text>
                <Text style={styles.txt_Task}>
                    In Processing
                </Text>
                <Text style={styles.txt_Task}>
                    On Hold
                </Text>
                <Text style={styles.txt_Task}>
                    Close
                </Text>
            </View>
        );
    }

    render() {
        const dataArray = [
            { title: `IncidentCount(${this.state.data2.IncidentCount})` },
            { title: `Request(${this.state.data2.RequestCount})` },
            { title: `Change Order(${this.state.data2.ProblemCount})` }
        ];
        const onAccordion = (
            <Accordion
                dataArray={dataArray}
                animation={true}
                expanded={true}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
            />
        );

        return (
            <DashboardScreen data1={this.state.data1} onTask={onAccordion} />
        );
    }
}
export default Dashboard;
//# sourceMappingURL=index.js.map