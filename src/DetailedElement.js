import React from "react";


class DetailedElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="detailedElement" className="bordered centered">
                <div id="detailedAtomicNumber" />
                <div id="detailedSymbol" className="bolded" />
                <div id="detailedElementName" />
                <div id="detailedAtomicWeight" />
            </div>
        );
    }
}

export default DetailedElement
