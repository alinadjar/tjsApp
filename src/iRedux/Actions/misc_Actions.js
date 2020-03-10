import { SET_WHOAMI } from '../types';

export const set_WhoAmI = (txt) => ({
    type: SET_WHOAMI,
    payload: txt
})