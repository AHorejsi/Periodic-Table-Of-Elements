import React from "react";
import {NumberRow, NumberColumn} from "./NumberPositions";
import AtomicElement from "./ElementRepresentation";
import ElementLegend from "./ElementLegend";
import DetailedElement from "./DetailedElement";


class PeriodicTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {		
        return (
            <div className="grid">
                <NumberRow />
                <NumberColumn />
                <ElementLegend />
            </div>
        );
    }
}

export default PeriodicTable
