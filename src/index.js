import React from "react";
import ReactDOM from "react-dom";
import "./Stylesheet.css";
import PeriodicTable from "./PeriodicTable";


var $ = require("jquery");

$(document).ready(function() {
    ReactDOM.render(<PeriodicTable />, document.getElementById("main"));

    $("#temperatureSlider").val(0);
    $("#temperatureInput").val(0);
});
