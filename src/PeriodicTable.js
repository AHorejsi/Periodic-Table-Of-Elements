import React from "react";
import {NumberRow, NumberColumn} from "./NumberPositions";
import AtomicElement from "./ElementRepresentation";
import ElementLegend from "./ElementLegend";
import DetailedElement from "./DetailedElement";
import TemperatureSlider from "./TemperatureSlider";


var json = require("./ElementJSON");

class PeriodicTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {		
        return (
            <div className="grid">
                <TemperatureSlider />
                <AtomicElement elementName="hydrogen" atomicNumber="1" atomicWeight="1.008" symbol="H" type="no-type" />
                <DetailedElement />
            </div>
        );
    }
}

export default PeriodicTable
