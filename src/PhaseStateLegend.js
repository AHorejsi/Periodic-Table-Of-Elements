import React from "react";
import $ from "jquery";


class PhaseStateLegend extends React.Component {
    constructor(props) {
        super(props);
    }

    _highlightStates(phaseState) {
        $("#" + phaseState + "Legend").removeClass(phaseState).addClass(phaseState + "Highlight");
        $("." + phaseState + ".elemBox").removeClass(phaseState).addClass(phaseState + "Highlight");
    }

    _unhighlightStates(phaseState) {
        $("#" + phaseState + "Legend").removeClass(phaseState + "Highlight").addClass(phaseState);
        $("." + phaseState + "Highlight.elemBox").removeClass(phaseState + "Highlight").addClass(phaseState);
    }

    render() {
        return (
            <div id="phaseStateLegend" className="floatLeft pointerCursor">
                <div className="phaseSymbolOuterDiv pointerCursor">
                    <span id="solidLegend" className="phaseSymbol centered solid handPointer"
                          onMouseOver={(event) => this._highlightStates("solid")}
                          onMouseOut={(event) => this._unhighlightStates("solid")}>
                        S
                    </span>

                    <span id="solidText" className="solid bolded handPointer">
                        Solid
                    </span>
                </div>

                <div className="phaseSymbolOuterDiv pointerCursor">
                    <span id="liquidLegend" className="phaseSymbol centered liquid handPointer"
                          onMouseOver={(event) => this._highlightStates("liquid")}
                          onMouseOut={(event) => this._unhighlightStates("liquid")}>
                        L
                    </span>

                    <span id="liquidText" className="liquid bolded handPointer">
                        Liquid
                    </span>
                </div>

                <div className="phaseSymbolOuterDiv pointerCursor">
                    <span id="gasLegend" className="phaseSymbol centered gas handPointer"
                          onMouseOver={(event) => this._highlightStates("gas")}
                          onMouseOut={(event) => this._unhighlightStates("gas")}>
                        G
                    </span>

                    <span id="gasText" className="gas bolded handPointer">
                        Gas
                    </span>
                </div>

                <div className="phaseSymbolOuterDiv pointerCursror">
                    <span id="unknownLegend" className="phaseSymbol centered unknown handPointer"
                          onMouseOver={(event) => this._highlightStates("unknown")}
                          onMouseOut={(event) => this._unhighlightStates("unknown")}>
                        Uk
                    </span>

                    <span id="unknownText" className="unknown bolded handPointer">
                        Unknown
                    </span>
                </div>
            </div>
        );
    }
}


export default PhaseStateLegend;
