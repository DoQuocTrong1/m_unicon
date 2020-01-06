import { Toast } from 'native-base';
const toastr = {
    showToast: (message, type = 'success', duration = 2500) => {
        Toast.show({
            text: message,
            duration,
            type,
            position: 'bottom',
            textStyle: { textAlign: 'center' },
        });
    },
};
export default toastr;
//# sourceMappingURL=index.js.map