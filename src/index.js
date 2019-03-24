import React from "react";
import ReactDOM from "react-dom";
import "./Stylesheet.css";
import PeriodicTable from "./PeriodicTable";


var $ = require("jquery");

$(document).ready(function() {
    //$("#temperatureInput").val("0");
    //$("#temperatureSlider").val("0");
    ReactDOM.render(<PeriodicTable />, document.getElementById("main"));
});
