import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    headerClearLarger: {
        paddingTop: 5,
    },
    content: {
        marginRight: 5,
        marginBottom: 10,
        marginLeft: 5,
    },
    panelInfo: {
        paddingRight: 10,
        paddingLeft: 2,
        backgroundColor: '#e1e5ec',
        height: 34,
        borderRadius: 4,
        justifyContent: 'center',
    },
    panelContent: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    slide: {
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 5,
    },
    slideSubText: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#646464',
    },
    searchInput: {
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: '#f2f2f3',
        height: 34,
    },
    table: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    bottom: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    rightBottom: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        right: 10,
    },
    listRightBottomButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    rightBottomInside: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f33',
        borderRadius: 50,
        width: 60,
        height: 60,
    },
    right45Transform: {
        transform: [{rotate: '45deg'}],
    },
    containerMap: {
        flex: 1,
        height: 300,
        width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    btnCircle: {
        borderRadius: 15,
        height: 30,
    },
});
export default styles;
// # sourceMappingURL=framework.js.map
