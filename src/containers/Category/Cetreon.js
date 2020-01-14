import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Host from './HostList';
import Services from './Services';

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#22252A' }}
        scrollEnabled={true}
    />
);

export default class Centreon extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const[index, setIndex] = React.useState(0);
        const[routes] = React.useState([
            { key: 'first', title: 'Hosts' },
            { key: 'second', title: 'Services' },
        ]);
    
        const renderScene = SceneMap({
            first: Host,
            second: Services,
          
        });
        return (
            <View>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    renderTabBar={renderTabBar}
                />
            </View>
        );
    }
}

//# sourceMappingURL=index.js.map