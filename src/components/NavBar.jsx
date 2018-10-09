import React, { Component } from "react";
import "./navbar.css";
import CartIcon from "./CartIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <FontAwesomeIcon
          className="navbar-menu-icon"
          icon="align-justify"
          size="2x"
          onClick={this.props.onMenuToggle}
        />
        <CartIcon />
      </div>
    );
  }
}

export default NavBar;
