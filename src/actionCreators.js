import axios from 'axios';

const addToCart = product => {
    return {
        type: "ADD_TO_CART",
        product
      };
};

const fetchProducts = products => {
    return dispatch => {
        return axios.get("http://localhost:3001/products")
            .then(response => {
                dispatch({
                    type: "FETCH_PRODUCTS",
                    products: response.data
                });
            });
    }
}

export { addToCart, fetchProducts };

