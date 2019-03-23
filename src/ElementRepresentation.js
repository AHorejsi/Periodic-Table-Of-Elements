import React from "react";


class AtomicElement extends React.Component {
	constructor(props) {
        super(props);
    }

    _renderMoreDetailedVersion() {
        document.getElementById("detailedElement").setAttribute("class", this.props.type);
        document.getElementById("detailedAtomicNumber").textContent = this.props.atomicNumber;
        document.getElementById("detailedSymbol").textContent = this.props.symbol;
        document.getElementById("detailedElementName").textContent = this.props.elementName;
        document.getElementById("detailedAtomicWeight").textContent = this.props.atomicWeight;
    }

    _resetMoreDetailedVersion() {
        document.getElementById("detailedElement").setAttribute("class", "");
        document.getElementById("detailedAtomicNumber").textContent = "";
        document.getElementById("detailedSymbol").textContent = "";
        document.getElementById("detailedElementName").textContent = "";
        document.getElementById("detailedAtomicWeight").textContent = "";
    }
	
    render() {
        return (
            <div id={this.props.elementName} className={"bordered " + this.props.type}
                onMouseOver={(event) => this._renderMoreDetailedVersion()}
                onMouseOut={(event) => this._resetMoreDetailedVersion()}>
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
