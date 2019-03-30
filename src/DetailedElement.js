import React from "react";


class DetailedElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="detailedElement" className="bordered centered detailed">
                <div id="detailedAtomicNumber" />
                <div id="detailedAtomicWeight" />
                <div id="detailedElementName" />
                <div id="detailedSymbol" className="bolded" />
            </div>
        );
    }
}

export default DetailedElement
