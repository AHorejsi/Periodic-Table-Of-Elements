import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class AtomicElement extends React.Component {
	constructor(props) {
        super(props);
    }

    _renderDetailedElement() {
        $("#detailedElement").addClass(this.props.type + "Detailed");
        $("#detailedAtomicNumber").text(this.props.atomicNumber);
        $("#detailedSymbol").text(this.props.symbol);
        $("#detailedElementName").text(this.props.elementName.charAt(0).toUpperCase() + this.props.elementName.substring(1));
        $("#detailedAtomicWeight").text(this.props.atomicWeight);
    }

    _resetDetailedElement() {
        $("#detailedElement").removeClass(this.props.type + "Detailed");
        $("#detailedAtomicNumber").text("");
        $("#detailedSymbol").text("");
        $("#detailedElementName").text("");
        $("#detailedAtomicWeight").text("");
    }
	
    render() {
        let styling = {
            gridRow: this.props.row + " / " + (this.props.row + 1),
            gridColumn: this.props.column + " / " + (this.props.column + 1)
        };

        return (
            <div id={this.props.elementName}
                    className={"bordered centered elemBox pointerCursor " + this.props.type +
                            " group" + this.props.group + " period" + this.props.period}
                    onMouseOver={(event) => this._renderDetailedElement()}
                    onMouseOut={(event) => this._resetDetailedElement()}
                    style={styling}>

                <div>
                    {this.props.atomicNumber}
                </div>

                <div className="bolded">
                    {this.props.symbol}
                </div>
            </div>
		);
	}
}


export default AtomicElement
