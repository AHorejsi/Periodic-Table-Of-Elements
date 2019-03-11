import React from "react";
import ReactDOM from "react-dom";
import PeriodicTable from "./PeriodicTable";
import "./Stylesheet.css";


let xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		ReactDOM.render(<PeriodicTable jsonData={this.responseText}>, document.getElementById("root"));
	}
};

xmlHttp.open("GET", "./periodic-table/Elements.json", true);
xmlHttp.send();
