import React from "react";
import $ from "jquery";
import getJsonData from "./JSONRetriever";
import { computePhaseState } from "./ChemCalc";


class TemperatureSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $("#temperatureSlider").val(293.15);
        this._updateAtomicElementStatesFromSlider();
    }

    _updateAtomicElementStatesFromSlider() {
        let temperature = $("#temperatureSlider").val();
        $("#temperatureInput").val(temperature);

        this._editStates(temperature);
    }

    _updateAtomicElementStatesFromTextBox() {
        let temperature = $("#temperatureInput").val();
        $("#temperatureSlider").val(temperature);

        this._editStates(temperature);
    }
	
    _editStates(temperature) {
        let elementData = getJsonData("./ElementData.json");

        $.each(elementData, (element, properties) => {
            let elemDiv = $("#" + element);
            let phaseState = computePhaseState(properties, temperature);

            if (!elemDiv.hasClass(phaseState)) {
                elemDiv.removeClass("gas liquid solid unknown");
                elemDiv.addClass(phaseState);
            }
        });
    }

    render() {
        return (
            <div id="temperatureDiv">
                <span className="sliderSpan">
                    <input id="temperatureSlider" className="slider floatLeft" type="range" min="0" max="9999" step="0.01"
                           onChange={(event) => this._updateAtomicElementStatesFromSlider()} />
                </span>
                    
                <span>
                    <input id="temperatureInput" className="sliderTextbox centered floatRight" type="text" minLength="1" maxLength="7"
                           onKeyUp={(event) => this._updateAtomicElementStatesFromTextBox()} />
                </span>
            </div>
        );        
    }
}


export default TemperatureSlider
