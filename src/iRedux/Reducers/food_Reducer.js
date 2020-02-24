import {OVERWRITE_LIST_FOODS} from '../types';

export default function (state = {}, action) {
    switch (action.type) {
        case OVERWRITE_LIST_FOODS:
            return {
                ...state,
                foodList: action.payload
            }
        default:
            return state;
    }
}