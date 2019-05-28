import React from "react";
import $ from "jquery";
import Slider from "./Slider";


class PressureSlider extends Slider {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $("#pressureSlider").val(1);
        this._updateAtomicElementStatesFromSlider();
    }

    _updateAtomicElementStatesFromSlider() {
        let pressure = $("#pressureSlider").val();
        $("#pressureInput").val(pressure);

        this.editStates($("#temperatureInput").val(), pressure);
    }

    _updateAtomicElementStatesFromTextBox() {
        let pressure = $("#pressureInput").val();
        $("#pressureSlider").val(pressure);

        this.editStates($("#temperatureInput").val(), pressure);
    }

    render() {
        return (
            <div id="pressureDiv">
                <span className="sliderSpan">
                    <input id="pressureSlider" className="slider floatLeft" type="range" min="0" max="6000" step="0.01"
                        onChange={(event) => this._updateAtomicElementStatesFromSlider()} />
                </span>

                <span>
                    <input id="pressureInput" className="sliderTextbox centered floatRight" type="text" minLength="1" maxLength="7"
                        onKeyUp={(event) => this._updateAtomicElementStatesFromTextBox()} />
                </span>
            </div>
        );
    }
}


export default PressureSlider
