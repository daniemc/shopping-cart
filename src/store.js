import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

const products = (state = [], action) => {
    if (action.type === "FETCH_PRODUCTS") {
        return action.products;
    } 
    return state;
};

const cart = (state = [], action) => {

    if (action.type === "ADD_TO_CART") {
        const productInCart = state
        .filter(product => product.id === action.product.id);
        if (productInCart.length === 0) {
            return state.concat(action.product);
        } 

        return state
                .map(productInCart => {
                    productInCart.qty = productInCart.id === action.product.id ? productInCart.qty + 1 : productInCart.qty;
                    return productInCart;
                });
        
    }

    return state;
};

const logger = store => next => action => next(action);    


export default createStore(
    combineReducers({
        cart, products
    }), 
    applyMiddleware(logger, reduxThunk)
);