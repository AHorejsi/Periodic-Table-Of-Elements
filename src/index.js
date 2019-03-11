import React from "react";
import ReactDOM from "react-dom";
import PeriodicTable from "./PeriodicTable";
import "./Stylesheet.css";
import "./Elements.json";


let xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		let json = this.responseText;
		ReactDOM.render(<PeriodicTable jsonData={this.responseText} />, document.getElementById("root"));
	}
};

xmlHttp.open("GET", "C:/Users/alexh/Desktop/periodic-table/src/Elements.json", true);
xmlHttp.send();
