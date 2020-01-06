import * as React from 'react';
// @ts-ignore
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// @ts-ignore
import configureStore from './configureStore';
import App from '../navigators/AppNavigator';
export default class Setup extends React.Component {
    constructor(props) {
        // @ts-ignore
        super(props);
        this.state = {
            isLoading: false,
            store: configureStore().store,
            persistor: configureStore().persistor,
        };
    }
    render() {
        return (<Provider store={this.state.store}>
        <PersistGate loading={null} persistor={this.state.persistor}>
          <Root>
            <SafeAreaProvider>
              <App />
            </SafeAreaProvider>
          </Root>
        </PersistGate>
      </Provider>);
    }
}
//# sourceMappingURL=setup.js.map