import * as React from 'react';
import UserScreen from '../../screens/User';
import AsyncStorage from '@react-native-community/async-storage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RNRestart from 'react-native-restart'; 

export class User extends React.Component {
    async logout() {
        const { token } = AsyncStorage.getItem('@TOKEN');
        try {
            if (token !== null) {
                AsyncStorage.removeItem('@TOKEN');
                // this.props.navigation.navigate('Detail');
                console.log('token', AsyncStorage.getItem('@TOKEN'))
                RNRestart.Restart();
            }
        }
        catch (err) {
            console.log('err', err);
        }
    }
    render() {
        return (<UserScreen onLogout={() => this.logout()} />);
    }
}
export default User;
//# sourceMappingURL=index.js.map