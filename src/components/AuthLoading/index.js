import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TOKEN } from '../../constants/values';
class AuthLoadingScreen extends React.Component {
    constructor() {
        super(...arguments);
        // Fetch the token from storage then navigate to our appropriate place
        this._bootstrapAsync = async () => {
            const userToken = await AsyncStorage.getItem(TOKEN);
            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        };
    }
    componentDidMount() {
        this._bootstrapAsync();
    }
    // Render any loading content that you like here
    render() {
        return (<View>
                <ActivityIndicator />
                <StatusBar barStyle="default"/>
            </View>);
    }
}
export default AuthLoadingScreen;
//# sourceMappingURL=index.js.map