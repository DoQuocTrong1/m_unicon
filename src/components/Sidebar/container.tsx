import * as React from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
import {NavigationActions, StackActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import Sidebar from './screen';
import {TOKEN} from '../../constants/values';

export interface Props {
    navigation: any;
}

export interface State {
}

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Login'})],
});

class SidebarContainer extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    async logOut() {
        await AsyncStorage.removeItem(TOKEN);
        this.props.navigation.dispatch(resetAction);
    }


    render() {
        return (
            <Sidebar
                navigation={this.props.navigation}
                logOut={this.logOut}
            />
        );
    }
}

// function mapStateToProps(state: { sidebarReducer: { screen: any }; }) {
//     return {
//         screen: state.sidebarReducer.screen,
//     };
// }
//
// // @ts-ignore
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(sidebarActions, dispatch),
//     };
// }

export default SidebarContainer
