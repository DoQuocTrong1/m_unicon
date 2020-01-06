import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { View } from 'native-base';

// @ts-ignore
import styles from '../../styles/style_mobile';


const initialLayout = { width: Dimensions.get('window').width };
// @ts-ignore
const renderTabBar = props => (<TabBar {...props} indicatorStyle={{ backgroundColor: 'white' }} style={{ backgroundColor: '#22252A' }} />);
// @ts-ignore
const BoxAdd = ({ routesState, sceneMap }) => {
    const [index, setIndex] = useState(0);
    const [routes] = useState(routesState);
    // @ts-ignore
    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <Chart data={dataLine} />;
            case 'second':
                return <Chart data={dataBar} />;
            case 'three':
                return <Chart data={dataLine} />;
            default:
                return null;
        }
    };
    return (
        <View style={styles.box_home}>
            <View style={styles.box_content}>
                <TabView navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    renderTabBar={renderTabBar} />
            </View>
        </View>);
};
export default BoxAdd;
