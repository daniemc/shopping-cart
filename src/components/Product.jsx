import React, { Component } from "react";
import "./product.css";
class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product">
        <img
          src={`https://picsum.photos/200/200/?${this.props.product.id}`}
          alt=""
          className="product-image"
        />
        <div className="product-info">
          <span>{this.props.product.name}</span>
          <span>{this.props.product.price}</span>
        </div>
      </div>
    );
  }
}

export default Product;
