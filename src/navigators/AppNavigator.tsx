import React from 'react';
import {View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
// import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// @ts-ignore
import AuthLoadingScreen from '../components/AuthLoading';
import Login from '../containers/Login';
// import SideBar from '../components/Sidebar';
import Dashboard from '../containers/Dashboard';

// @ts-ignore
const TabNavigator = createMaterialBottomTabNavigator(
    {
        Dashboard: {
            screen: Dashboard,
            navigationOptions: {
                tabBarLabel: 'Trang chủ',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'home-variant-outline'} />
                    </View>),
                activeColor: '#F17128',
                inactiveColor: '#fff',
                barStyle: { backgroundColor: '#22252A', height:70 },

            }
        },
        Ticket: {
            screen: Dashboard,
            navigationOptions: {
                tabBarLabel: 'Ticket',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'checkbox-multiple-blank-outline'} />
                    </View>),
                activeColor: '#F17128',
                inactiveColor: '#fff',
                barStyle: { backgroundColor: '#22252A', height:70 },

            }
        },
        category: {
            screen: Dashboard,
            navigationOptions: {
                tabBarLabel: 'Danh mục',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'grid'} />
                    </View>),
                activeColor: '#F17128',
                inactiveColor: '#fff',
                barStyle: { backgroundColor: '#22252A' , height:70},
            }
        },
        User: {
            screen: Dashboard,
            navigationOptions: {
                tabBarLabel: 'Cá nhân',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'account-card-details-outline'} />
                    </View>),
            }
        },
    },
    {
        initialRouteName: "Dashboard",
        activeColor: '#F17128',
        inactiveColor: '#fff',
        barStyle: { backgroundColor: '#22252A', height:70,  },

    },
);

const AuthStack = createStackNavigator(
    {Login: Login},
    {
        headerMode: 'none',
    },
);

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: TabNavigator,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'AuthLoading',
        },
    ),
);
