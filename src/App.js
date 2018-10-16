import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ShoppingPage from "./components/ShoppingPage";
import Menu from "./components/Menu";
import { Route, BrowserRouter } from 'react-router-dom';

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
      <BrowserRouter>
        <div className="container">
          <NavBar
            menuIsOpen={this.state.menuIsOpen}
            onMenuToggle={this.handleMenuToggle}
            />
          <div className="content">
            {this.state.menuIsOpen && <Menu open={this.state.menuIsOpen} />}
              <Route exact path="/shop" component={ShoppingPage} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
