import React from "react";
import ReactDOM from "react-dom";
import "./Stylesheet.css";
import PeriodicTable from "./PeriodicTable";


let xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        ReactDOM.render(<PeriodicTable jsonData={xmlHttp.responseText} />, document.getElementById("app"));
    }
};

xmlHttp.responseType = "text";
xmlHttp.open("GET", "./Elements.json", true);
xmlHttp.send();
