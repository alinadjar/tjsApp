import {  BASKET_ADD, BASKET_UPDATE, BASKET_REMOVE, BASKET_CLEAR } from "../types";


export const addToCart = (product, quantity) => ({
    type: BASKET_ADD,
    payload: {
        product,
        quantity: quantity || 1
    }
});


export const updateCartQuantity = (product, quantity) => ({
    type: BASKET_UPDATE,
    payload: { product, quantity }
})


export const removeFromCart = (product) => ({
    type: BASKET_REMOVE,
    payload: product
})


export const clearCart = () => ({
    type: BASKET_CLEAR
})