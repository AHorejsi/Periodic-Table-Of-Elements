import React from "react";


const UPDATED_FROM_SLIDER = 0;
const UPDATED_FROM_TEXTBOX = 1;
const elemJSON = require("./ElementJSON").elementJSON;

class TemperatureSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    _updateAtomicElementStates(event, sourceOfUpdate) {
        if (sourceOfUpdate === UPDATED_FROM_TEXTBOX) {
            document.getElementById("temperatureSlider").value = document.getElementById("temperatureInput").value;
        }
        else {
            document.getElementById("temperatureInput").value = document.getElementById("temperatureSlider").value;
        }

        for (elem of elemJSON) {
            let elemSymbol = document.getElementById(elem).children[1];

            elemSymbol.classList.remove("gas");
            elemSymbol.classList.remove("liquid");
            elemSymbol.classList.remove("solid");
            elemSymbol.classList.remove("unknown");

            let phaseState; // Figure out phase state

            elemSymbol.classList.add(phaseState);
        }
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
