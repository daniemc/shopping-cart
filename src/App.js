import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ShoppingPage from "./components/ShoppingPage";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ShoppingPage />
      </React.Fragment>
    );
  }
}

export default App;
