import React from "react";
import ReactDOM from "react-dom";
import {LessDetailedAtomicElement, MoreDetailedAtomicElement} from "./ElementRepresentation";
import ElementLegend from "./ElementLegend";
import {NumberRow, NumberColumn} from "./NumberPositions";

class PeriodicTable extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let json = JSON.parse(this.props.jsonData);
		
		return json;
 	}
}

export default PeriodicTable
