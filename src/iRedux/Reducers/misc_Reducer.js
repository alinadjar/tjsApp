import { SET_WHOAMI, SET_ERROR_API } from '../types';

export default function (state = {}, action) {
    switch (action.type) {
        case SET_WHOAMI:
            return {
                ...state,
                WhoAmI: action.payload
            }
        case SET_ERROR_API:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}