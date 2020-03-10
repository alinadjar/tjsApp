import Axios from 'axios';
import { AXIOS_TIMEOUT } from '../../utils/misc';
import { OVERWRITE_LIST_FOODS, SET_ERROR_API } from '../types';




// export const FetchFoods = () => {
//     return (dispatch) => {
//         const request = Axios.request({
//             method: 'GET',
//             url: 'http://192.168.87.62:5000/api/v1/foods',
//             timeout: AXIOS_TIMEOUT
//         }).then(response => {

//             console.log(response.data);
//             return response.data;
//             //throw new Error('this is a fake error');

//             // return {
//             //     res: response.data,
//             //     status: response.status
//             // };
//         }).catch(e => {

//             console.log(e);
//             return new Promise((resolve, reject) => {
//                 resolve({
//                     error: e,
//                     status: 500
//                 });
//             });
//             // return {
//             //     res: e,
//             //     status: 500
//             // }

//             return [];
//             //return e;
//         });

//         console.log(request);
//         console.log(typeof(request));



//         const response = dispatch({
//             type: OVERWRITE_LIST_FOODS,
//             payload: request
//         });

//         //// ------------------------------------ response is promise
//         // console.log(typeof(response)); // prints: object
//         // console.log(typeof(response.then)); // prints: function
//         console.log(response);

//         // response.then(() => {
//         //     setTimeout(() => {
//         //         dispatch(SpinnerHide())
//         //     }, 1000);
//         // });

//         return response; // --> use response.then( ) on the receiver's side, rather than sending callback
//     }
// }




export const FetchFoods = () => {
    return (dispatch) => {

        const r = Axios.request({
            method: 'GET',
            url: 'http://192.168.87.62:5000/api/v1/foods',
            timeout: AXIOS_TIMEOUT
        })
            .then(response => {

                // console.log(response.data);

                // return new Promise((resolve, reject) => {                
                //     resolve(response.data);                
                // });


                return response.data;
                //throw new Error('this is a fake error');

            })
            .then(data => {

                console.log('now inside data => dispatch');

                const response = dispatch({
                    type: OVERWRITE_LIST_FOODS,
                    payload: data
                });

                return response; // this is promise
            })
            .catch(e => {

                // const response = dispatch({
                //     type: SET_ERROR_API,
                //     payload: new Promise((resolve, reject) => {
                //         resolve({
                //             body: e.message,
                //             status: 500
                //         })
                //     })
                // });

                // return response; // this is promise

                console.log(e + '<---------------------');
                // e.message
                // e.name
                // e.stack
                return new Promise((resolve, reject) => {
                    resolve({
                        error: e.message,
                        status: 500
                    });
                });
            });

        //// ------------------------------------ response is promise
        // console.log(typeof(response)); // prints: object
        // console.log(typeof(response.then)); // prints: function
        //console.log(response);

        //return response; // --> use response.then( ) on the receiver's side, rather than sending callback
        return r;
    }
}