import React from "react";
import ReactDOM from "react-dom";
import Page from "./Page";
import "./Stylesheet.css";


var $ = require("jquery");

$(document).ready(function() {
    ReactDOM.render(<Page />, document.getElementById("main"));

    //$("#temperatureSlider").val(273);
    //$("#temperatureInput").val(273);
    //$("#temperatureSlider").trigger("change");
});
