import React from "react";


var json = require("./ElementJSON");
var $ = require("jquery");

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
        let elementData = json.elementJSON.data;

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
            if (temperature > elementData[elem].boilingPoint) {
                return "gas";
            }
        }

        if (elementData[elem].meltingPoint !== "unknown") {
            if (temperature < elementData[elem].meltingPoint) {
                return "solid";
            }
            else {
                return "liquid";
            }
        }

        return "unknown";
    }

    render() {
        return (
            <div className="tempSlider">
                <form>
                    <div className="sliderDiv">
                        <input id="temperatureSlider" className="slider floatLeft" type="range" min="0" max="9999" step="1"
                               onChange={(event) => this._updateAtomicElementStatesFromSlider()} />
                    </div>

                    <div className="textboxDiv">
                        <input id="temperatureInput" className="sliderTextbox floatRight" type="number" minLength="1" maxLength="4"
                               onKeyUp={(event) => this._updateAtomicElementStatesFromTextBox()} />
                    </div>
                </form>
            </div>
        );        
    }
}

export default TemperatureSlider
