"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {LessDetailedAtomicElement, MoreDetailedAtomicElement} from "./ElementRepresentation";
import "./Stylesheet.css";

ReactDOM.render(<MoreDetailedAtomicElement atomicNumber="10" symbol="Yp" elementName="Yupit" atomicWeight="15.654" type="alkali" />, 
document.getElementById("root"));
