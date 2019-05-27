import React from "react";
import $ from "jquery";
import { elementData } from "./JSONRetriever";

class TemperatureSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $("#temperatureSlider").val(273);
        this._updateAtomicElementStatesFromSlider(this.props.json);
    }

    _updateAtomicElementStatesFromSlider() {
        let temperature = $("#temperatureSlider").val();
        $("#temperatureInput").val(temperature);

        this._editStates(Number(temperature), elementData);
    }

    _updateAtomicElementStatesFromTextBox() {
        let temperature = $("#temperatureInput").val();
        $("#temperatureSlider").val(temperature);
        
        this._editStates(Number(temperature), elementData);
    }

    _editStates(temperature, elementData) {
        for (let elem in elementData) {
            let elemDiv = $("#" + elem);
            let phaseState = this._computePhaseState(elem, elementData, temperature);

            if (!elemDiv.hasClass(phaseState)) {
                elemDiv.removeClass("gas liquid solid unknown");
                elemDiv.addClass(phaseState);
            }
        }
    }

    _computePhaseState(elem, elementData, temperature) {
        if (elementData[elem].boilingPoint !== "unknown") {
            if (elementData[elem].boilingPoint < temperature) {
                return "gas";
            }
        }

        if (elementData[elem].meltingPoint !== "unknown") {
            if (elementData[elem].meltingPoint > temperature) {
                return "solid";
            }
            else if (elementData[elem].boilingPoint !== "unknown") {
                return "liquid";
            }
        }

        return "unknown";
    }

    render() {
        return (
            <div id="temperatureDiv">
                <span id="sliderSpan">
                    <input id="temperatureSlider" className="slider floatLeft" type="range" min="0" max="9999" step="1"
                           onChange={(event) => this._updateAtomicElementStatesFromSlider()} />
                </span>
                    
                <span>
                    <input id="temperatureInput" className="sliderTextbox centered floatRight" type="number" minLength="1" maxLength="4"
                           onKeyUp={(event) => this._updateAtomicElementStatesFromTextBox()} />
                </span>
            </div>
        );        
    }
}


export default TemperatureSlider
