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

library.add(faShoppingCart, faAlignJustify, faCartPlus);
ReactDOM.render(<App />, document.getElementById("root"));
