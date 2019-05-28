import React from "react";
import $ from "jquery";
import { elementData } from "./JSONRetriever";
import { computePhaseState } from "./ChemCalc";


class Slider extends React.Component {
    constructor(props) {
        super(props);
    }

    editStates(temperature, pressure) {
        for (let elem in elementData) {
            let elemDiv = $("#" + elem);
            let phaseState = computePhaseState(elementData[elem], temperature, pressure);

            if (!elemDiv.hasClass(phaseState)) {
                elemDiv.removeClass("gas liquid solid unknown");
                elemDiv.addClass(phaseState);
            }
        }
    }
}


export default Slider
