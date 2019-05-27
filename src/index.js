import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import App from "./App";
import "./Stylesheet.css";


$(document).ready(function() {
    ReactDOM.render(<App />, document.getElementById("root"));
});
