import React from "react";


class PhaseStateLegend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="phaseStateLegend" className="floatLeft">
                <div className="phaseSymbolOuterDiv">
                    <span id="solidLegend" className="phaseSymbol centered solidColor">
                        S
                    </span>

                    <span id="solidText" className="solidColor bolded">
                        Solid
                    </span>
                </div>

                <div className="phaseSymbolOuterDiv">
                    <span id="liquidLegend" className="phaseSymbol centered liquidColor">
                        L
                    </span>

                    <span id="liquidText" className="liquidColor bolded">
                        Liquid
                    </span>
                </div>

                <div className="phaseSymbolOuterDiv">
                    <span id="gasLegend" className="phaseSymbol centered gasColor">
                        G
                    </span>

                    <span id="gasText" className="gasColor bolded">
                        Gas
                    </span>
                </div>

                <div className="phaseSymbolOuterDiv">
                    <span id="unknownLegend" className="phaseSymbol centered unknownColor">
                        Uk
                    </span>

                    <span id="unknownText" className="unknownColor bolded">
                        Unknown
                    </span>
                </div>
            </div>
        );
    }
}


export default PhaseStateLegend;
