import {Dimensions, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    body: {
        backgroundColor: '#ffffff',
    },
    image: {
        width: 260,
        height: 70,
    },
    logo: {
        paddingTop: 50,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    formGroup: {
        marginBottom: 15,
    },
    loginForm: {
        width: deviceWidth - 100,
        paddingTop: 30,
    },
    input: {
        backgroundColor: '#e9edf3',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e9edf3',
        color: '#588dd0',
        fontSize: 14,
        fontWeight: '500',
        borderRadius: 8,
        paddingLeft: 30,
    },
    inputIcon: {
        height: 43,
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        marginTop: 12,
        marginRight: 2,
        marginBottom: 4,
        marginLeft: 10,
        zIndex: 3,
        width: 20,
        color: '#ccc',
        fontSize: 20,
        textAlign: 'center',
    },
    formAction: {
        paddingTop: 25,
    },
    button: {
        marginTop: 1,
        width: deviceWidth - 100,
        height: 43,
        paddingRight: 0,
    },
    text: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 18,
    },
});
export default styles;
// # sourceMappingURL=login.js.map
