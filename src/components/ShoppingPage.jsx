import React, { Component } from "react";
import Product from "./Product";
import "./shoppingpage.css";
import store from "../store";
import { addToCart } from "../actionCreators";

class ShoppingPage extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "nombre 1",
        description: "descripcion producto 1",
        price: 45000,
        qty: 0
      },
      {
        id: 2,
        name: "nombre producto 2",
        description: "descripcion producto 2",
        price: 23000,
        qty: 0
      },
      {
        id: 3,
        name: "nombre 3",
        description: "descripcion producto 3",
        price: 15000,
        qty: 0
      },
      {
        id: 4,
        name: "nombre producto xyx asd 4",
        description: "descripcion producto 4",
        price: 35000,
        qty: 0
      },
      {
        id: 5,
        name: "nombre 1",
        description: "descripcion producto 1",
        price: 45000,
        qty: 0
      },
      {
        id: 6,
        name: "nombre producto 2",
        description: "descripcion producto 2",
        price: 23000,
        qty: 0
      },
      {
        id: 7,
        name: "nombre 3",
        description: "descripcion producto 3",
        price: 15000,
        qty: 0
      },
      {
        id: 8,
        name: "nombre producto xyx asd 4",
        description: "descripcion producto 4",
        price: 35000,
        qty: 0
      },
      {
        id: 9,
        name: "nombre 3",
        description: "descripcion producto 3",
        price: 15000,
        qty: 0
      },
      {
        id: 10,
        name: "nombre producto xyx asd 4",
        description: "descripcion producto 4",
        price: 35000,
        qty: 0
      },
      {
        id: 11,
        name: "nombre 3",
        description: "descripcion producto 3",
        price: 15000,
        qty: 0
      },
      {
        id: 12,
        name: "nombre producto xyx asd 4",
        description: "descripcion producto 4",
        price: 35000,
        qty: 0
      },
      {
        id: 13,
        name: "nombre 3",
        description: "descripcion producto 3",
        price: 15000,
        qty: 0
      },
      {
        id: 14,
        name: "nombre producto xyx asd 4",
        description: "descripcion producto 4",
        price: 35000,
        qty: 0
      },
      {
        id: 15,
        name: "nombre 3",
        description: "descripcion producto 3",
        price: 15000,
        qty: 0
      },
      {
        id: 16,
        name: "nombre producto xyx asd 4",
        description: "descripcion producto 4",
        price: 35000,
        qty: 0
      },
      {
        id: 17,
        name: "nombre 3",
        description: "descripcion producto 3",
        price: 15000,
        qty: 0
      },
      {
        id: 18,
        name: "nombre producto xyx asd 4",
        description: "descripcion producto 4",
        price: 35000,
        qty: 0
      },
      {
        id: 19,
        name: "nombre 3",
        description: "descripcion producto 3",
        price: 15000,
        qty: 0
      },
      {
        id: 20,
        name: "nombre producto xyx asd 4",
        description: "descripcion producto 4",
        price: 35000,
        qty: 0
      },
      {
        id: 21,
        name: "nombre 3",
        description: "descripcion producto 3",
        price: 15000,
        qty: 0
      },
      {
        id: 22,
        name: "nombre producto xyx asd 4",
        description: "descripcion producto 4",
        price: 35000,
        qty: 0
      }
    ]
  };
  render() {
    return (
      <div className="shopping-page">
        {this.state.products.length > 0 &&
          this.state.products.map(product => (
            <Product key={product.id} product={product} handleAddToCart={this.addToCart} />
          ))}
      </div>
    );
  }

  addToCart(product) {
    store.dispatch(addToCart(product));
  }
}

export default ShoppingPage;
