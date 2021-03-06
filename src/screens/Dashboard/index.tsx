import React from 'react';
import {Image, ScrollView} from 'react-native';
import {View} from 'native-base';

// @ts-ignore
import styles from '../../styles/style_mobile';

import NotiBox from './Notibox';
import BoxHome from './BoxHome';
import Chart from './Chart';

import {dataBar, dataLine} from '../../containers/Dashboard/data';

const DashboardScreen = ({}) => {
    return (
        <View style={styles.bg_primary}>
            <View style={styles.header_mobile}>
                <Image source={require('../../images/logoSmall.png')} style={styles.logo_title}/>
            </View>

            <View style={styles.content_body}>

                <View style={styles.box_noti_dashboard}>
                    <NotiBox iconName={'link'} data={25}/>
                    <NotiBox iconName={'box'} data={25}/>
                    <NotiBox iconName={'images'} data={25}/>
                </View>

                <ScrollView style={{flex: 1}}>
                    <BoxHome
                        routesState={[
                            {key: 'first', title: 'TopCPU'},
                            {key: 'second', title: 'VPBank'},
                            {key: 'three', title: 'FPTSever'}
                        ]}
                        sceneMap={[
                            {key: 'first', data: dataLine},
                            {key: 'second', data: dataBar},
                            {key: 'three', data: dataLine}
                        ]}
                    />

                    <BoxHome
                        routesState={[
                            {key: 'first', title: 'TopCPU'},
                            {key: 'second', title: 'VPBank'},
                            {key: 'three', title: 'FPTSever'}
                        ]}
                        sceneMap={{
                            first: <Chart data={dataLine}/>,
                            second: <Chart data={dataBar}/>,
                            three: <Chart data={dataBar}/>,
                        }}
                    />


                    {/*<View style={styles.box_home}>*/}
                    {/*    <View style={styles.box_content}>*/}
                    {/*        <Text style={styles.title_box}>*/}
                    {/*            Danh sách ticket*/}
                    {/*        </Text>*/}
                    {/*        <TicketList/>*/}
                    {/*    </View>*/}
                    {/*</View>*/}
                </ScrollView>
            </View>
        </View>

    )
};

export default DashboardScreen;
