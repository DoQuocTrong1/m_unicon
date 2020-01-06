import {Toast} from 'native-base';

const toastr = {
    showToast: (message: string, type: string | any = 'success', duration: number = 2500) => {
        Toast.show({
            text: message,
            duration,
            type,
            position: 'bottom',
            textStyle: {textAlign: 'center'},
        });
    },
};

export default toastr;
