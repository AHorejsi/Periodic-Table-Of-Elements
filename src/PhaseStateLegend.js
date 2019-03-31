import React from "react";


class PhaseStateLegend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="phaseStateLegend" className="floatLeft">
                <div className="phaseSymbolOuterDiv">
                    <span id="solidLegend" className="phaseSymbol centered solid">
                        S
                    </span>

                    <span id="solidText" className="solid bolded">
                        Solid
                    </span>
                </div>

                <div className="phaseSymbolOuterDiv">
                    <span id="liquidLegend" className="phaseSymbol centered liquid">
                        L
                    </span>

                    <span id="liquidText" className="liquid bolded">
                        Liquid
                    </span>
                </div>

                <div className="phaseSymbolOuterDiv">
                    <span id="gasLegend" className="phaseSymbol centered gas">
                        G
                    </span>

                    <span id="gasText" className="gas bolded">
                        Gas
                    </span>
                </div>

                <div className="phaseSymbolOuterDiv">
                    <span id="unknownLegend" className="phaseSymbol centered unknown">
                        Uk
                    </span>

                    <span id="unknownText" className="unknown bolded">
                        Unknown
                    </span>
                </div>
            </div>
        );
    }
}


export default PhaseStateLegend;
