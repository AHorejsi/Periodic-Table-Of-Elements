import React from "react";


class DetailedElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="detailedElement">
                <div className="bordered centered">
                    <div id="detailedAtomicNumber">
                    </div>
                    <div id="detailedSymbol">
                    </div>
                    <div id="detailedElementName">
                    </div>
                    <div id="detailedAtomicWeight">
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailedElement
