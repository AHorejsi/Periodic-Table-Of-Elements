import React from "react";


var $ = require("jquery");

class AtomicElement extends React.Component {
	constructor(props) {
        super(props);
    }

    _renderDetailedElement() {
        $("#detailedElement").addClass(this.props.type);
        $("#detailedAtomicNumber").text(this.props.atomicNumber);
        $("#detailedSymbol").text(this.props.symbol);
        $("#detailedElementName").text(this.props.elementName);
        $("#detailedAtomicWeight").text(this.props.atomicWeight);
    }

    _resetDetailedElement() {
        $("#detailedElement").removeClass(this.props.type);
        $("#detailedAtomicNumber").text("");
        $("#detailedSymbol").text("");
        $("#detailedElementName").text("");
        $("#detailedAtomicWeight").text("");
    }
	
    render() {
        return (
            <div id={this.props.elementName} className={"bordered " + this.props.type}
                 onMouseOver={(event) => this._renderDetailedElement()}
                 onMouseOut={(event) => this._resetDetailedElement()}>

                <div className="centered">
					{this.props.atomicNumber}
				</div>

                <div className="elementSymbol lessDetailed bolded centered">
					{this.props.symbol}
                </div>
			</div>
		);
	}
}

export default AtomicElement
