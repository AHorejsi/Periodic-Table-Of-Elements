import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Page from "./Page";
import "./Stylesheet.css";


$(document).ready(function() {
    $.getJSON("./Elements.json", function(jsonData) {
        ReactDOM.render(<Page json={jsonData} />, document.getElementById("main"));
    });
});
