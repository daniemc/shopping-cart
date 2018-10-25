import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cartIcon.css";
import { connect } from "react-redux";

const CartIcon = ({ cart }) => {    
    return (
      <div className="shopping-cart-icon">
        <a href="http://google.com" className="shopping-cart-link">
          <FontAwesomeIcon icon="shopping-cart" size="2x" />
        </a>
        <span className="shopping-cart-count">{cart.length}</span>
      </div>
    );  
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};


export default connect(mapStateToProps)(CartIcon);
