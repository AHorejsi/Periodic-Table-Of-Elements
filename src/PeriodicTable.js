import React from "react";
import AtomicElement from "./ElementRepresentation";


var json = require("./ElementJSON");

class PeriodicTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let html = []
        let elementData = json.elementJSON.data;

        for (let elem in elementData) {
            html.push(<AtomicElement elementName={elem} atomicNumber={elementData[elem].atomicNumber}
                                     atomicWeight={elementData[elem].atomicWeight} symbol={elementData[elem].symbol}
                                     type={elementData[elem].type} row={elementData[elem].row} column={elementData[elem].column} />);
        }

        return (
            <div className="grid">
                {html}
            </div>
        );
    }
}

export default PeriodicTable
