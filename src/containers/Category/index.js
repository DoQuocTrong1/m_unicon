import * as React from 'react';
import CategoryScreen from '../../screens/Category';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cetreon from './Cetreon';

export class Category extends React.Component {
    static navigationOptions = {
        header: null,
    };
    cetreon() {
        try{
            this.props.navigation.navigate('Cetreon');
        }
        catch (err) {
            console.log('err', err);
        }
        
    }
    render() {
        return (<CategoryScreen onCetreon={() => this.cetreon()}/>);
    }
}

const MainNavigator = createStackNavigator({
    Category: { screen: Category },
    Cetreon: { screen: Cetreon },
},
    {
        defaultNavigationOptions: {
            header: null
        },
    });

const Categorys = createAppContainer(MainNavigator);

export default Categorys;
//# sourceMappingURL=index.js.map