import Axios from 'axios';
import { OVERWRITE_LIST_FOODS } from '../types';


export const FetchFoods = () => {
    return (dispatch) => {

        const request = Axios.request({
            method: 'GET',
            url: 'http://192.168.87.62:5000/api/v1/foods'
        }).then(response => {

            console.log(response.data);
            return response.data;
            //throw new Error('this is a fake error');
        }).catch(e => {
            dispatch(SpinnerHide());
            dispatch(WriteError({
                code: 500,
                message: e.message,
                error: '',
                redirect: ''
            }));
            console.log(e);
            //return e;
        });


        const response = dispatch({
            type:  OVERWRITE_LIST_FOODS,
            payload: request
        });

        // response.then(() => {
        //     setTimeout(() => {
        //         dispatch(SpinnerHide())
        //     }, 1000);
        // });

        return response; // --> use response.then( ) on the receiver's side, rather than sending callback
    }
}