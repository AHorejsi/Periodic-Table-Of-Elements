import React from "react";
import ReactDOM from "react-dom";
import PeriodicTable from "./PeriodicTable";
import "./Stylesheet.css";


var $ = require("jquery");

$(document).ready(function() {
    ReactDOM.render(<PeriodicTable />, document.getElementById("main"));

    $("#temperatureSlider").val(6000);
    $("#temperatureInput").val(6000);
});
