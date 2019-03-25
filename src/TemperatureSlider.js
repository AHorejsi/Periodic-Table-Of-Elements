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
        for (let elem in json.elementJSON.data) {
            let elemDiv = $("#" + elem);
            let phaseState = this._computePhaseState(elem, json.elementJSON.data, temperature);

            if (!elemDiv.hasClass(phaseState)) {
                elemDiv.removeClass("gas");
                elemDiv.removeClass("liquid");
                elemDiv.removeClass("solid");
                elemDiv.removeClass("unknown");

                elemDiv.addClass(phaseState);
            }
        }
    }

    _computePhaseState(elem, data, temperature) {
        if (data[elem].boilingPoint !== "unknown") {
            if (temperature > data[elem].boilingPoint) {
                return "gas";
            }
        }

        if (data[elem].meltingPoint !== "unknown") {
            if (temperature < data[elem].meltingPoint) {
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
            <div>
                <form>
                    <input id="temperatureSlider" className="slider" type="range" min="0" max="9999" step="1"
                           onChange={(event) => this._updateAtomicElementStatesFromSlider()} />
                    <input id="temperatureInput" type="number" minLength="1" maxLength="4"
                           onKeyUp={(event) => this._updateAtomicElementStatesFromTextBox()} />
                </form>
            </div>
        );        
    }
}

export default TemperatureSlider
