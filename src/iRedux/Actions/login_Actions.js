import Axios from 'axios';
import { SET_WHOAMI } from '../../iRedux/types';
import { AXIOS_TIMEOUT } from '../../utils/misc';

export const authenticate_Garson = ({ username, password }) => {

    return (dispatch) => {

        const request = Axios.request({
            method: 'POST',
            url: 'http://192.168.87.62:5000/api/v1/Login',
            data: {
                user: username,
                pass: password
            },
            timeout: AXIOS_TIMEOUT
        })
            .then(res => {
                console.log(res.data);


                dispatch({
                    type: SET_WHOAMI,
                    payload: 'garson'
                });


                return {
                    res: res.data,
                    status: res.status
                };
            })
            .catch(err => {
                //console.log(err);
                //return err;
                return {
                    res: err,
                    status: 500
                };
            });



        return request;
    }

}