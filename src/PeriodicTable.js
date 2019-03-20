import React from "react";
import {NumberRow, NumberColumn} from "./NumberPositions";
import AtomicElement from "./ElementRepresentation";
import ElementLegend from "./ElementLegend";
import DetailedElement from "./DetailedElement";
import TemperatureSlider from "./TemperatureSlider";


var elemJSON = require("./ElementJSON").elementJSON;

class PeriodicTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {		
        return (
            <div className="grid">
                {/*<NumberRow />
                <NumberColumn />
                <ElementLegend />*/}
                <TemperatureSlider />
            </div>
        );
    }
}

export default PeriodicTable
