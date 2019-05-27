import React from "react";
import $ from "jquery";
import Slider from "./Slider";


class TemperatureSlider extends Slider {
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

        this.editStates(temperature, $("#pressureInput").val());
    }

    _updateAtomicElementStatesFromTextBox() {
        let temperature = $("#temperatureInput").val();
        $("#temperatureSlider").val(temperature);

        this.editStates(temperature, $("#pressureInput").val());
    }

    render() {
        return (
            <div id="temperatureDiv">
                <span className="sliderSpan">
                    <input id="temperatureSlider" className="slider floatLeft" type="range" min="0" max="6000" step="0.01"
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
