import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faAlignJustify,
  faCartPlus
} from "@fortawesome/free-solid-svg-icons";
import store from "./store";
import { Provider } from "react-redux";
import { fetchProducts } from './actionCreators';

store.dispatch(fetchProducts());

library.add(faShoppingCart, faAlignJustify, faCartPlus);
ReactDOM.render(
  <Provider store={store} >
    <App /> 
  </Provider>,
  document.getElementById("root")
);
