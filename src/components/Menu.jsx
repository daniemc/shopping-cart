import React, { Component } from "react";
import "./menu.css";
import { Link } from "react-router-dom";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="menu">
        <div className="menu-list-item">
          <Link to="/shop">Comprar</Link>
        </div>
        <div className="menu-list-item">
          <Link to="/cart">Ver carrito</Link>
        </div>
        <div className="menu-list-item">
          <Link to="/products">Ver productos</Link>
        </div>
      </div>
    );
  }
}

export default Menu;
