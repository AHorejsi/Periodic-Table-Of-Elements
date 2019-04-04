import React from "react";
import AtomicElement from "./ElementRepresentation";
import RangeBox from "./RangeBox";
import DetailedElement from "./DetailedElement";
import ElementLegend from "./ElementLegend";
import TemperatureSlider from "./TemperatureSlider";
import PhaseStateLegend from "./PhaseStateLegend";
import elemJSON from "./ElementJSON";


class PeriodicTable extends React.Component {
    constructor(props) {
        super(props);
    }

    _getInnerHTML() {
        let html = []
        let elementData = elemJSON.data;

        for (let elem in elementData) {
            html.push(<AtomicElement elementName={elem} atomicNumber={elementData[elem].atomicNumber}
                atomicWeight={elementData[elem].atomicWeight} symbol={elementData[elem].symbol}
                type={elementData[elem].type} link={elementData[elem].wiki}
                row={elementData[elem].row} column={elementData[elem].column}
                group={elementData[elem].group} period={elementData[elem].period} />);
        }

        this._addGap(html);
        this._addInfoBox(html);

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

    _addInfoBox(html) {
        let infoStyling = {
            gridRow: "13 / 13",
            gridColumn: "1 / 5"
        };

        html.push(<p style={infoStyling}>
                    For elements with no stable isotopes, the mass number of the isotope with the longest half-life is in brackets.
                  </p>)
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
