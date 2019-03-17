import React from "react";
import { NumberRow, NumberColumn } from "./NumberPositions";
import {LessDetailedAtomicElement, MoreDetailedAtomicElement} from "./ElementRepresentation";


class PeriodicTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {		
        return (
            <div className="grid">
                <div className="columnNumbers">
                    <NumberRow />
                </div>
                <div className="rowNumbers">
                    <NumberColumn />
                </div>
            </div>
        );
    }
}

export default PeriodicTable
