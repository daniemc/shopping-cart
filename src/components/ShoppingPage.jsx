import React, { Component } from "react";
import Product from "./Product";
import "./shoppingpage.css";

class ShoppingPage extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "nombre 1",
        description: "descripcion producto 1",
        price: 0
      },
      {
        id: 2,
        name: "nombre 2",
        description: "descripcion producto 2",
        price: 0
      },
      {
        id: 3,
        name: "nombre 3",
        description: "descripcion producto 3",
        price: 0
      },
      {
        id: 4,
        name: "nombre 4",
        description: "descripcion producto 4",
        price: 0
      }
    ]
  };
  render() {
    return (
      <div className="shopping-page">
        {this.state.products.length > 0 &&
          this.state.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    );
  }
}

export default ShoppingPage;
