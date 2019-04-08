import React from "react";
import $ from "jquery";
import elemJSON from "./ElementJSON";

class TemperatureSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    _updateAtomicElementStatesFromSlider() {
        let temperature = $("#temperatureSlider").val();
        $("#temperatureInput").val(temperature);

        this._editStates(Number(temperature));
    }

    _updateAtomicElementStatesFromTextBox() {
        let temperature = $("#temperatureInput").val();
        $("#temperatureSlider").val(temperature);
        
        this._editStates(Number(temperature));
    }

    _editStates(temperature) {
        let elementData = elemJSON.data;

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
        if (elementData[elem].boilingPoint != "unknown") {
            if (elementData[elem].boilingPoint < temperature) {
                return "gas";
            }
        }

        if (elementData[elem].meltingPoint != "unknown") {
            if (elementData[elem].meltingPoint < temperature) {
                return "liquid";
            }
            else {
                return "solid";
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
                    <input id="temperatureInput" className="sliderTextbox floatRight" type="number" minLength="1" maxLength="4"
                           onKeyUp={(event) => this._updateAtomicElementStatesFromTextBox()} />
                </span>
            </div>
        );        
    }
}


export default TemperatureSlider
