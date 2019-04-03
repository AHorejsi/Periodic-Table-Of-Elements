import React from "react";


class PhaseStateLegend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="phaseStateLegend" className="floatLeft pointerCursor">
                <div className="phaseSymbolOuterDiv pointerCursor">
                    <span id="solidLegend" className="phaseSymbol centered solid handPointer">
                        S
                    </span>

                    <span id="solidText" className="solid bolded handPointer">
                        Solid
                    </span>
                </div>

                <div className="phaseSymbolOuterDiv pointerCursor">
                    <span id="liquidLegend" className="phaseSymbol centered liquid handPointer">
                        L
                    </span>

                    <span id="liquidText" className="liquid bolded handPointer">
                        Liquid
                    </span>
                </div>

                <div className="phaseSymbolOuterDiv pointerCursor">
                    <span id="gasLegend" className="phaseSymbol centered gas handPointer">
                        G
                    </span>

                    <span id="gasText" className="gas bolded handPointer">
                        Gas
                    </span>
                </div>

                <div className="phaseSymbolOuterDiv pointerCursror">
                    <span id="unknownLegend" className="phaseSymbol centered unknown handPointer">
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
