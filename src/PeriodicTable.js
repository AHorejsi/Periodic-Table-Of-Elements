import React from "react";
import AtomicElement from "./ElementRepresentation";
import RangeBox from "./RangeBox";
import DetailedElement from "./DetailedElement";
import ElementLegend from "./ElementLegend";
import TemperatureSlider from "./TemperatureSlider";
import PhaseStateLegend from "./PhaseStateLegend";
import { NumberRow, NumberColumn } from "./NumberPositions";


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
                type={elementData[elem].type} link={elementData[elem].wiki}
                row={elementData[elem].row + 1} column={elementData[elem].column + 1} />);
        }

        this._addGap(html);

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

    render() {
        return (
            <div id="periodicTable">
                <div className="grid">
                    {this._getInnerHTML()}

                    <RangeBox min="57" max="71" repType="lanthanoid" gridRow="7" gridColumn="4" />
                    <RangeBox min="89" max="103" repType="actinoid" gridRow="8" gridColumn="4" />

                    <div className="legendGroup">
                        <PhaseStateLegend />
                        <ElementLegend />
                    </div>

                    <TemperatureSlider />

                    <div className="detailed">
                        <DetailedElement />
                    </div>
                </div>
            </div>
        );
    }
}

export default PeriodicTable
