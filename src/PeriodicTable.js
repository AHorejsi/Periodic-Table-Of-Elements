import React from "react";
import $ from "jquery";
import AtomicElement from "./AtomicElement";
import RangeBox from "./RangeBox";
import DetailedElement from "./DetailedElement";
import CategoryLegend from "./CategoryLegend";
import PhaseStateLegend from "./PhaseStateLegend";
import TemperatureSlider from "./TemperatureSlider";
import { elementData } from "./JSONRetriever";


class PeriodicTable extends React.Component {
    constructor(props) {
        super(props);
    }

    _getInnerHTML() {
        let html = [];

        $.each(elementData, function(elementName, elementProperties) {
            let component = (
                <AtomicElement elementName={elementName} atomicNumber={elementProperties.atomicNumber}
                    atomicWeight={elementProperties.atomicWeight} symbol={elementProperties.symbol}
                    type={elementProperties.type} row={elementProperties.row} column={elementProperties.column}
                    group={elementProperties.group} period={elementProperties.period} />    
            );

            html.push(component);
        });

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
                <div id="innerPeriodicTableDiv" className="grid">
                    {this._getInnerHTML()}

                    <RangeBox min="57" max="71" repType="lanthanoid" gridRow="7" gridColumn="4" />
                    <RangeBox min="89" max="103" repType="actinoid" gridRow="8" gridColumn="4" />

                    <div id="transitionMetalGap">
                        <PhaseStateLegend />
                        <CategoryLegend />
                    </div>

                    <div id="nonmetalGap">
                        <TemperatureSlider />
                    </div>

                    <div id="leftCorner">
                        <DetailedElement />
                    </div>
                </div>
            </div>
        );
    }
}


export default PeriodicTable
