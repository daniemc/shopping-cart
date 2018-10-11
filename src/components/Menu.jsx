import React, { Component } from "react";
import "./menu.css";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="menu">
        <div className="menu-list-item">Ver carrito</div>
        <div className="menu-list-item">Ver productos</div>
      </div>
    );
  }
}

export default Menu;
