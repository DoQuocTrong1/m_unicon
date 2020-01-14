import * as React from 'react';
import UserScreen from '../../screens/User';
import AsyncStorage from '@react-native-community/async-storage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RNRestart from 'react-native-restart'; 

import Detail from './DetailUser';

class User extends React.Component {
    DetailUser() {
        this.props.navigation.navigate('Details');
    }
    async logout() {
        const { token } = AsyncStorage.getItem('@TOKEN');
        try {
            if (token !== null) {
                AsyncStorage.removeItem('@TOKEN');
                console.log('token', AsyncStorage.getItem('@TOKEN'))
                RNRestart.Restart();
            }
        }
        catch (err) {
            console.log('err', err);
        }
    }
    render() {
        return (<UserScreen onLogout={() => this.logout()} onDetail={() => this.DetailUser()} />);
    }
}

const RootStack = createStackNavigator({
    Home: User,
    Details: Detail,
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        header: null
    },
});

export default createAppContainer(RootStack);

//# sourceMappingURL=index.js.map