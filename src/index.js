import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faAlignJustify
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faAlignJustify);
ReactDOM.render(<App />, document.getElementById("root"));
