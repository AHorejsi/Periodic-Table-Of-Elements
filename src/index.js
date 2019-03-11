"use strict";

import React from "react";
import ReactDOM from "react-dom";
import PeriodicTable from "./PeriodicTable";
import "./Stylesheet.css";

window.onload = function() {
	ReactDOM.render(<PeriodicTable />, document.getElementById("root"));
}
