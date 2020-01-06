import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';

import {TOKEN} from '../../constants/values';

interface Props {
    navigation: NavigationStackProp<{}>;
}

class AuthLoadingScreen extends React.Component<Props> {
    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem(TOKEN);


        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}

export default AuthLoadingScreen;
