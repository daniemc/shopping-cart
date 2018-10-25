import React from "react";
import Product from "./Product";
import "./shoppingpage.css";
import { connect } from 'react-redux';
import { addToCart } from '../actionCreators';

const ShoppingPage = ({ products, addToCart }) => {
    return (
      <div className="shopping-page">
        {products.length > 0 &&
          products.map(product => (
            <Product key={product.id} product={product} handleAddToCart={addToCart} />
          ))}
      </div>
    );
  };

  const mapStateToProps = state => {
    return {
      products: state.products
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      addToCart(product) {
        dispatch(addToCart(product));
      }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage);
