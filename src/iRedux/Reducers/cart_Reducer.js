
import { BASKET_ADD, BASKET_REMOVE, BASKET_UPDATE, BASKET_CLEAR } from '../types';


//       cart: [
//           {
//             product: {
//               GOOD_ID: '21590001',
//               PRICE: '1450000',
//               QUANTITY: '2',
//               RATE: '5654583',
//               ADD_PRICE: '0',
//               NAME: 'کباب برگ مخصوص '
//             },
//             quantity: 2
//           },
//           {
//             product: {
//               GOOD_ID: '21590002',
//               PRICE: '1450000',
//               QUANTITY: '26',
//               RATE: '1000011960',
//               ADD_PRICE: '0',
//               NAME: 'شيشليک مخصوص شانديز'
//             },
//             quantity: 1
//           }
//         ],
//         cartItems: 3,
//         cartPrice: 4350000
//       }

export default function (storeData, action) {

    let newStore = { cart: [], cartItems: 0, cartPrice: 0, ...storeData }

    switch (action.type) {
        case BASKET_ADD:
            const p = action.payload.product;
            const q = action.payload.quantity;
            console.log('======================');
            console.log(p);
            let existing = newStore.cart.find(item => item.product.GOOD_ID === p.GOOD_ID);
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
                if (item.product.GOOD_ID === action.payload.product.GOOD_ID) {
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
                item.product.GOOD_ID === action.payload.GOOD_ID);
            newStore.cartItems -= selection.quantity;
            newStore.cartPrice -= selection.quantity * selection.product.PRICE;
            newStore.cart = newStore.cart.filter(item => item !== selection);
            return newStore;
            
        case BASKET_CLEAR:
            return { ...storeData, cart: [], cartItems: 0, cartPrice: 0 }

        default:
            return newStore || {};

    }

}