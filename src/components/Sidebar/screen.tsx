import * as React from 'react';
import {
    Text, ListItem, View, Right
} from 'native-base';
import {
    Image,
    ScrollView,
    FlatList,
} from 'react-native';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
import Feather from 'react-native-vector-icons/Feather';
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from '../../styles/sidebar';
import style2 from '../../styles/style';
import {NavigationActions, StackActions} from "react-navigation";

const routes = [
    {
        route: 'Dashboard',
        caption: 'Dashboard',
        icon: 'home',
        fontIcon: Feather,
        index: 1,
    },
    {
        route: 'ManagementAccount',
        caption: 'Quản lý tài khoản',
        icon: 'user-o',
        fontIcon: FontAwesome,
        index: 2,
    },
    {
        route: 'ManagementSDM',
        caption: 'Quản lý SDM',
        icon: 'warning',
        fontIcon: FontAwesome,
    },
    {
        route: 'ManagementCentreon',
        caption: 'Quản lý Centreon',
        icon: 'sliders',
        fontIcon: FontAwesome,
    },
    {
        route: 'Logout',
        caption: 'Đăng xuất',
        icon: 'sign-out',
        fontIcon: FontAwesome,
    },
];

const Sidebar = ({...props}) => (
    <ScrollView
    >
        <View style={style.menuMainTop}>
            <View style={style.menuLogo}>
                <Image
                    source={require('../../images/logo.png')}
                    style={{
                        width: 200,
                        height: 40,
                    }}
                />
            </View>
            <View style={style.menuSubLogo}>
                <Text style={{
                    color: '#d82c1e',
                }}
                >
                    Hello&nbsp;
                </Text>
            </View>
        </View>
        <FlatList
            data={routes}
            renderItem={({item}) => (
                <ListItem
                    style={[style.menuItem,
                        {marginLeft: 0, paddingLeft: 10},
                        props.screen === item.route ? style2.backgroundActive : {}
                    ]}
                    button
                    onPress={() => {
                        item.route === 'Logout' // eslint-disable-line
                            ? props.logOut() : props.navigation.navigate(item.route);
                    }}
                >
                    <item.fontIcon
                        size={24}
                        style={style.menuIconLeft}
                        name={item.icon}
                    />
                    <Text style={{textAlign: 'left'}}>{item.caption}</Text>
                    <Right style={{position: 'absolute', right: 23}}>
                        <FontAwesome5
                            size={8}
                            color={props.screen === item.route ? '#e74c3c' : '#a5a5a5'}
                            name="circle"
                        />
                    </Right>
                </ListItem>
            )}
        />
    </ScrollView>
);

export default Sidebar;
