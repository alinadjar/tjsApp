
import Axios from 'axios';
import {STORE_GUEST_INFO, STORE_GUEST_MOBILE} from '../types';

// export const saveGuestInfo = (guest_info) => {
//     return (dispatch) => {

//         const request = Axios.request({
//             method: 'POST',
//             url: 'http://192.168.87.62:5000/api/v1/guests',
//             data: guest_info
//         }).then(response => {

//             console.log(response.data);
//             return response.data;
//             //throw new Error('this is a fake error');
//         }).catch(err => {
//             console.log(err);
//         });

//         const response = dispatch({
//             type: STORE_GUEST_INFO,
//             payload: request
//         });


//         return response;        
//     }


// }

export const saveGuestInfo = (guest_info) => {

    return {
        type: STORE_GUEST_INFO,
        payload: guest_info
    }

}


export const saveGuestMobile = (mobileNumber) => {

    return {
        type: STORE_GUEST_MOBILE,
        payload: mobileNumber
    }

}