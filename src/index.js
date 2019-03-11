"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {LessDetailedAtomicElement, MoreDetailedAtomicElement} from "./ElementRepresentation";
import ElementLegend from "./ElementLegend";
import {NumberRow, NumberColumn} from "./NumberPositions";
import "./Stylesheet.css";

ReactDOM.render(<MoreDetailedAtomicElement atomicNumber="15" symbol="Hy" type="transition-metal" elementName="Hyre" atomicWeight="8.54"/>, document.getElementById("root"));
