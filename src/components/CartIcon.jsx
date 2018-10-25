import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cartIcon.css";
import store from "../store";

class CartIcon extends Component {
  constructor() {
    super();

    this.state = {
      productsInCart: 0
    };

    store.subscribe(() => {
      this.setState({
        productsInCart: store.getState().cart.length
      });
    });

  }
  render() {
    return (
      <div className="shopping-cart-icon">
        <a href="http://google.com" className="shopping-cart-link">
          <FontAwesomeIcon icon="shopping-cart" size="2x" />
        </a>
        <span className="shopping-cart-count">{this.state.productsInCart}</span>
      </div>
    );
  }
}

export default CartIcon;
