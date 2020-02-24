
import { BASKET_ADD, BASKET_REMOVE, BASKET_UPDATE, BASKET_CLEAR } from '../types';

export default function (storeData, action) {

    let newStore = { cart: [], cartItems: 0, cartPrice: 0, ...storeData }

    switch (action.type) {
        case BASKET_ADD:
            const p = action.payload.product;
            const q = action.payload.quantity;
            let existing = newStore.cart.find(item => item.product.id === p.id);
            if (existing) {
                existing.quantity += q;
            }
            else {
                newStore.cart = [...newStore.cart, action.payload];
            }
            newStore.cartItems += q;
            newStore.cartPrice += p.PRICE * q;
            return newStore;


        case BASKET_UPDATE:
            newStore.cart = newStore.cart.map(item => {
                if (item.product.id === action.payload.product.id) {
                    const diff = action.payload.quantity - item.quantity;
                    newStore.cartItems += diff;
                    newStore.cartPrice += (item.product.PRICE * diff);
                    return action.payload;
                }
                else {
                    return item;
                }
            });
            return newStore;

        case BASKET_REMOVE:
            let selection = newStore.cart.find(item =>
                item.product.id === action.payload.id);
            newStore.cartItems -= selection.quantity;
            newStore.cartPrice -= selection.quantity * selection.product.PRICE;
            newStore.cart = newStore.cart.filter(item => item !== selection);
            return newStore;
            
        case BASKET_CLEAR:
            return { ...storeData, cart: [], cartItems: 0, cartPrice: 0 }

        default:
            return storeData || {};

    }

}