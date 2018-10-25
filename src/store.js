import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const reducer = (state, action) => {
    if (action.type === "FETCH_PRODUCTS") {
        return {
         ...state,
         products: action.products  
        };
    } else if (action.type === "ADD_TO_CART") {
        const productInCart = state
        .cart
        .filter(product => product.id === action.product.id);
        if (productInCart.length === 0) {
            return {
                ...state,
                cart: state.cart.concat(action.product)
            }
        } 

        return {
            ...state,
                cart: state
                    .cart
                    .map(productInCart => {
                    productInCart.qty = productInCart.id === action.product.id ? productInCart.qty + 1 : productInCart.qty;
                    return productInCart;
                })
        }
    }

    return state;
};

const logger = store => next => action => next(action);    


export default createStore(reducer, { cart: [], products: [] }, applyMiddleware(logger, reduxThunk));