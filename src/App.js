import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ShoppingPage from "./components/ShoppingPage";
import Menu from "./components/Menu";

class App extends Component {
  state = {
    menuIsOpen: true
  };

  handleMenuToggle = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    });
  };

  render() {
    return (
      <div className="container">
        <NavBar
          menuIsOpen={this.state.menuIsOpen}
          onMenuToggle={this.handleMenuToggle}
        />
        <div className="content">
          {this.state.menuIsOpen && <Menu open={this.state.menuIsOpen} />}
          <ShoppingPage />
        </div>
      </div>
    );
  }
}

export default App;
