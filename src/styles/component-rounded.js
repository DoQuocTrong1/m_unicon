import {StyleSheet, StatusBar, Platform} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    green: {
        color: '#FFF',
        backgroundColor: '#32c5d2',
        borderColor: '#32c5d2',
    },
    red: {
        color: '#f36a5a',
    },
    gray: {
        color: '#BFBFBF'
    },
    centerText: {
        textAlign: 'center',
    },
    hasError: {
        borderColor: '#e73d4a',
    },
    hasSuccess: {
        borderColor: '#27a4b0',
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        backgroundColor: '#646464',
        height: APPBAR_HEIGHT,
    },
    content: {
        flex: 1,
        backgroundColor: '#33373B',
    },
});
export default styles;
// # sourceMappingURL=components-rounded.js.map
