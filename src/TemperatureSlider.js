import React from "react";


const UPDATED_FROM_SLIDER = 0;
const UPDATED_FROM_TEXTBOX = 1;
var elemJSON = require("./ElementJSON").elementJSON;

class TemperatureSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    _updateAtomicElementStates(event, sourceOfUpdate) {
        /*let temperature = this._findTemperatureAndUpdateSlider(sourceOfUpdate);
        
        for (elem of elemJSON) {
            let elemDiv = document.getElementById(elem);
            let phaseState = this._computePhaseState(elem, temperature);
            elemDiv.setAttribute("phase", phaseState);
        }*/
    }

    _findTemperatureAndUpdateSlider(sourceOfUpdate) {
        let temperature;
        
        if (sourceOfUpdate === UPDATED_FROM_TEXTBOX) {
            temperature = document.getElementById("temperatureInput").value;
            document.getElementById("temperatureSlider").value = temperature;
        }
        else {
            temperature = document.getElementById("temperatureSlider").value;
            document.getElementById("temperatureInput").value = temperature;
        }

        return temperature;
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
                <input id="temperatureSlider" className="tempSlider" type="range"
                    min="1" max="6000" value="0"
                    onChange={(event) => this._updateAtomicElementStates(event, UPDATED_FROM_SLIDER)} />
                <input id="temperatureInput" className="tempInput" type="text"
                    value="0" maxLength="4"
                    onKeyDown={(event) => this._updateAtomicElementStates(event, UPDATED_FROM_TEXTBOX)} />
            </div>
        );        
    }
}

export default TemperatureSlider
