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
                <AtomicElement elementName="hydrogen" symbol="H" atomicNumber="1" atomicWeight="1.008" type="nonmetal" />
                <DetailedElement />
            </div>
        );
    }
}

export default PeriodicTable
