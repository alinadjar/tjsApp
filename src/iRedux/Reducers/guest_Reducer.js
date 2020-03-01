
import { STORE_GUEST_INFO, STORE_GUEST_MOBILE } from '../types';

export default function (storeData, action) {
    switch (action.type) {
        case STORE_GUEST_INFO:
            return {
                ...storeData,
                family: action.payload.family,
                mobile: action.payload.mobile,
                companions: action.payload.companions,
                orderType: action.payload.orderType,
                deskNumber: action.payload.deskNumber
            }
        case STORE_GUEST_MOBILE:            
            return {
                ...storeData,
                mobile:  action.payload
            }
        default:
            return storeData || {}
    }

}