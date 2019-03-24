import React from "react";
import {NumberRow, NumberColumn} from "./NumberPositions";
import AtomicElement from "./ElementRepresentation";
import ElementLegend from "./ElementLegend";
import DetailedElement from "./DetailedElement";
import TemperatureSlider from "./TemperatureSlider";


var jsonData = require("./ElementJSON");

class PeriodicTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {		
        return (
            <div className="grid">
                
            </div>
        );
    }
}

export default PeriodicTable
