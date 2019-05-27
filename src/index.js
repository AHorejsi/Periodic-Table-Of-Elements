import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import App from "./App";
import "./Stylesheet.css";


$(document).ready(function() {
    $.getJSON("./ElementData.json", function(elementData) {
        ReactDOM.render(<App json={elementData} />, document.getElementById("root"));
    });
});
