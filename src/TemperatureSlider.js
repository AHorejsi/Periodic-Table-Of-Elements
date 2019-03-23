import React from "react";


var elemJSON = require("./ElementJSON").elementJSON;

class TemperatureSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    _updateAtomicElementStatesFromSlider() {
        let temperature = document.getElementById("temperatureSlider").value;
        document.getElementById("temperatureInput").value = temperature;
        this._editStates(temperature);
    }

    _updateAtomicElementStatesFromTextBox() {
        let temperature = document.getElementById("temperatureInput").value;
        document.getElementById("temperatureSlider").value = temperature;
        this._editStates(temperature);
    }

    _editStates(temperature) {
        for (let elem in elemJSON) {
            let elemDiv = document.getElementById(elem);
            let phaseState = this._computePhaseState(elem, temperature);
            //Edit state color
        }
    }

    _computePhaseState(elem, temperature) {
        if (elem.boilingPoint !== "unknown") {
            if (temperature > elem.boilingPoint) {
                return "gas";
            }
        }

        if (elem.meltingPoint !== "unknown") {
            if (temperature < elem.meltingPoint) {
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
                    <input id="temperatureSlider" type="range" min="0" max="6000" step="1" value="0"
                        onClick={(event) => this._updateAtomicElementStatesFromSlider()} />
                    <input id="temperatureInput" type="text" maxLength="4"
                        onKeyDown={(event) => this._updateAtomicElementStatesFromTextBox()} />
                </form>
            </div>
        );        
    }
}

export default TemperatureSlider
