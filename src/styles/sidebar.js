import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainMenu: {
        width: 250,
        zIndex: 999,
    },
    menuMainTop: {
        backgroundColor: '#fef8ed',
        borderBottomColor: '#4c87b9',
        height: 120,
        borderBottomWidth: 2,
        paddingTop: 10
    },
    menuLogo: {
        width: '100%',
        height: 50,
        position: 'relative',
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 20,
        marginTop: 20,
    },
    menuSubLogo: {
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    menuItem: {
        borderBottomColor: '#ffffff',
        height: 55,
        width: 250,
        position: 'relative',
    },
    menuIconLeft: {
        color: '#5C9BD1',
        width: 40,
    },
    menuDivider: {
        height: 40,
        fontSize: 9,
        paddingLeft: 20,
        backgroundColor: 'rgba(0,0,0,0.02)',
        borderBottomColor: 'rgba(0,0,0,0.08)',
        borderBottomWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.08)',
        borderTopWidth: 1,
    },
    menuDividerText: {
        fontSize: 10,
        fontWeight: '500'
    },
    backgroundColor: {
        backgroundColor: '#FF6400'
    }
});
export default styles;
// # sourceMappingURL=sidebar.js.map
