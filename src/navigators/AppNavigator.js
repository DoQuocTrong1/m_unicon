import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
// import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconBadge from 'react-native-icon-badge';
// @ts-ignore
import AuthLoadingScreen from '../components/AuthLoading';
import Login from '../containers/Login';
import DetailCetreon from '../containers/Category/Cetreon';
import DetailUser from '../containers/User/DetailUser'

import Dashboard from '../containers/Dashboard';
import Category from '../containers/Category';
import Ticket from '../containers/Ticket';
import User from '../containers/User';
import Notification from '../containers/Notification';

// @ts-ignore
const TabNavigator = createMaterialBottomTabNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ tintColor }) => (<View>
                <Icon style={[{ color: tintColor }]} size={25} name={'home-variant-outline'} />
            </View>),
            activeColor: '#95bd1c',
            inactiveColor: '#fff',
            barStyle: { backgroundColor: '#22252A', height: 70 },
        }
    },
    Ticket: {
        screen: Ticket,
        navigationOptions: {
            tabBarLabel: 'Ticket',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{ color: tintColor }]} size={25} name={'checkbox-multiple-blank-outline'} />
                </View>),
            activeColor: '#95bd1c',
            inactiveColor: '#fff',
            barStyle: { backgroundColor: '#22252A', height: 70 },
        }
    },
    Notification: {
        screen: Notification,
        navigationOptions: {
            tabBarLabel: 'Thông báo',
            tabBarIcon: ({ tintColor }) => (<View>
                <Icon style={[{ color: tintColor }]} size={25} name={'bell-outline'} />
            </View>),
            activeColor: '#95bd1c',
            inactiveColor: '#fff',
            barStyle: { backgroundColor: '#22252A', height: 70 },
        }
    },
    category: {
        screen: Category,
        navigationOptions: {
            tabBarLabel: 'Danh mục',
            tabBarIcon: ({ tintColor }) => (<View>
                <Icon style={[{ color: tintColor }]} size={25} name={'grid'} />
            </View>),
            activeColor: '#95bd1c',
            inactiveColor: '#fff',
            barStyle: { backgroundColor: '#22252A', height: 70 },
        }
    },
    User: {
        screen: User,
        navigationOptions: {
            tabBarLabel: 'Cá nhân',
            tabBarIcon: ({ tintColor }) => (<View>
                <Icon style={[{ color: tintColor }]} size={25} name={'account-card-details-outline'} />
            </View>),
        }
    },
}, {
    initialRouteName: "Dashboard",
    activeColor: '#95bd1c',
    inactiveColor: '#fff',
    barStyle: { backgroundColor: '#22252A', height: 70, },
});


const AuthStack = createStackNavigator({
    Login: Login,
    Category: Category,
    DetailCetreon: DetailCetreon,
},
    {
        headerMode: 'none',
    });
export default createAppContainer(createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
    Auth: AuthStack,
}, {
    initialRouteName: 'AuthLoading',
}));
//# sourceMappingURL=AppNavigator.js.map