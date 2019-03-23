import React from "react";
import ReactDOM from "react-dom";
import "./Stylesheet.css";
import PeriodicTable from "./PeriodicTable";


window.onload = function() {
    //document.getElementById("temperatureInput").value = "0";
    //document.getElementById("temperatureSlider").value = "0";
}

ReactDOM.render(<PeriodicTable />, document.getElementById("main"));
