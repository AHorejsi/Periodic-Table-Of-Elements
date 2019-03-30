import React from "react";
import AtomicElement from "./ElementRepresentation";
import RangeBox from "./RangeBox";
import { NumberRow } from "./NumberPositions";


var json = require("./ElementJSON");

class PeriodicTable extends React.Component {
    constructor(props) {
        super(props);
    }

    _getInnerHTML() {
        let html = []
        let elementData = json.elementJSON.data;

        for (let elem in elementData) {
            html.push(<AtomicElement elementName={elem} atomicNumber={elementData[elem].atomicNumber}
                atomicWeight={elementData[elem].atomicWeight} symbol={elementData[elem].symbol}
                type={elementData[elem].type} row={elementData[elem].row + 1} column={elementData[elem].column + 1} />);
        }

        this._addGap(html);
        this._addRangeBoxes(html);

        return html;
    }

    _addGap(html) {
        let gapStyling = {
            gridRow: "9 / 9",
            gridColumn: "4 / 18",
            height: "3.5em"
        };

        html.push(<div style={gapStyling} />);
    }

    _addRangeBoxes(html) {
        html.push(<RangeBox min="57" max="71" repType="lanthanoid" gridRow="7" gridColumn="4" />);
        html.push(<RangeBox min="89" max="103" repType="actinoid" gridRow="8" gridColumn="4" />)
    }

    render() {
        return (
            <div className="grid">
                {this._getInnerHTML()}
            </div>
        );
    }
}

export default PeriodicTable
