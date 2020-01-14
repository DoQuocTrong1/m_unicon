import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';
import styles from '../../styles/style_mobile';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from './Navigation'
import ModalScreen from '../../screens/TicketDetail/Modal'


export default class DetailTicket extends Component {
    constructor(props) {
        super(props);
        this.state = { visibleModal: null, refNum:'' };
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerTitle = `Incident ${params.refNum}`;
        let headerTitleStyle = { alignItems: 'center',marginLeft:'45%'};
        let headerRight = (
            <Icon.Button
                name={'ios-more'}
                size={40} color={'#fff'}
                backgroundColor={'#22252A'}
                onPress={() => {params.onSave()}}
            />
        );
        return { headerTitle, headerTitleStyle, headerRight }
    };
    _onSave() {
        this.setState({ visibleModal: 1 })
    }
    _onCancel() {  this.setState({ visibleModal: null })}
    componentDidMount() {
        const refNum = this.props.navigation.getParam('refNum', '123');
        this.props.navigation.setParams({onSave: this._onSave.bind(this),visibleModal: null })
        this.setState({refNum});
    }
    render() {
        const { navigation } = this.props;
        return (<View style={{
            backgroundColor: '#22252A',
            flex: 1,
        }}>
            <Modal isVisible={this.state.visibleModal === 1}>
                <ModalScreen onCancel={() => this._onCancel()} />
            </Modal>
            <Navigation />
        </View>
        );
    }
}

