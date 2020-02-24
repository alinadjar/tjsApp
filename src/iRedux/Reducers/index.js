import { combineReducers } from 'redux';

import misc from "./misc_Reducer";
import food from "./food_Reducer";
import cart from "./cart_Reducer";


const rootReducer = combineReducers({
    miscR: misc,
    foodR: food,
    cartR: cart
});

export default rootReducer;