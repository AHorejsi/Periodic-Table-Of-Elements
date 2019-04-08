import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import MainContent from "./MainContent";
import "./Stylesheet.css";


$(document).ready(function() {
    $.getJSON("./Elements.json", function (jsonData) {
        ReactDOM.render(<MainContent json={jsonData} />, document.getElementById("main"));
    });
});
