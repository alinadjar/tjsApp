import { combineReducers } from 'redux';

import misc from "./misc_Reducer";
import food from "./food_Reducer";
import cart from "./cart_Reducer";
import guest from './guest_Reducer';


const rootReducer = combineReducers({
    miscR: misc,
    foodR: food,
    cartR: cart,
    guestR: guest
});

export default rootReducer;