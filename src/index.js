import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Page from "./Page";
import "./Stylesheet.css";


$(document).ready(function() {
    $.getJSON("./Elements.json", function(elementData) {
        ReactDOM.render(<Page json={elementData} />, document.getElementById("main"));
    });
});
