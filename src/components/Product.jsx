import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./product.css";
class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product">
        <div className="product-price">
          <span>{this.props.product.price}</span>
        </div>
        <img
          src={`https://picsum.photos/200/200/?${this.props.product.id}`}
          alt=""
          className="product-image"
        />
        <div className="product-info">
          <div className="product-info-name">
            <span>{this.props.product.name}</span>
          </div>
          <div>
            <FontAwesomeIcon
              className="product-info-add-to-cart"
              icon="cart-plus"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
