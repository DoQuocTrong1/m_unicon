import * as React from 'react';
import CategoryScreen from '../../screens/Category';
import { Dimensions, StyleSheet } from 'react-native';
import styles from '../../styles/style_mobile';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Collapsible from 'react-native-collapsible';

export default class Menu extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = { collapsed: true, collapsed2: true };
    }
    getCetreon() {
        this.props.navigation.navigate('DetailCetreon');
    }

    toggleExpanded() {
        this.setState({ collapsed: !this.state.collapsed });
    };
    toggleExpanded2() {
        this.setState({ collapsed2: !this.state.collapsed2 });
    };


    render() {
        return (<CategoryScreen
            onToggle={() => this.toggleExpanded()}
            onToggle2={() => this.toggleExpanded2()}
            onCetreon={() => this.getCetreon()}
            collapsed={this.state.collapsed}
            collapsed2={this.state.collapsed2} />);
    }
}





//# sourceMappingURL=index.js.map