import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ShoppingPage from "./components/ShoppingPage";
import Cart from "./components/Cart";
import Products from "./components/Products";
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
        <div className="app">
          <NavBar
            menuIsOpen={this.state.menuIsOpen}
            onMenuToggle={this.handleMenuToggle}
            />
            <div className="container">
              { this.state.menuIsOpen &&
                <div className="sidebar-menu">
                  <Menu open={this.state.menuIsOpen} />          
                </div>
              }
              <div className="page-content">          
                <Route exact path="/shop" component={ShoppingPage} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/products" component={Products} />
              </div>
            </div>

          </div>
      </BrowserRouter>
    );
  }
}

export default App;
