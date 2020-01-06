import cofig from 'react-native-config';

if (cofig.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod')
} else {
    module.exports = require('./configureStore.dev')
}
