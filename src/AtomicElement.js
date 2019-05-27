import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class AtomicElement extends React.Component {
	constructor(props) {
        super(props);
    }

    _makeEditsToPage() {
        this._renderDetailedElement();
        this._highlightGroupAndPeriodNumbers();
    }

    _renderDetailedElement() {
        $("#detailedElement").addClass(this.props.type + "Detailed");
        $("#detailedAtomicNumber").text(this.props.atomicNumber);
        $("#detailedSymbol").text(this.props.symbol);
        $("#detailedElementName").text(this.props.elementName.charAt(0).toUpperCase() + this.props.elementName.substring(1));
        $("#detailedAtomicWeight").text(this.props.atomicWeight);
    }

    _highlightGroupAndPeriodNumbers() {
        $("#group" + this.props.group + "ElementSet").css({
            "background-color": "yellow"
        });
        $("#period" + this.props.period + "ElementSet").css({
            "background-color": "yellow"
        });
    }

    _undoEditsToPage() {
        this._resetDetailedElement();
        this._unhighlightGroupAndPeriodNumbers();
    }

    _resetDetailedElement() {
        $("#detailedElement").removeClass(this.props.type + "Detailed");
        $("#detailedAtomicNumber").text("");
        $("#detailedSymbol").text("");
        $("#detailedElementName").text("");
        $("#detailedAtomicWeight").text("");
    }

    _unhighlightGroupAndPeriodNumbers() {
        $("#group" + this.props.group + "ElementSet").css({
            "background-color": "white"
        });
        $("#period" + this.props.period + "ElementSet").css({
            "background-color": "white"
        });
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
                    onMouseOver={(event) => this._makeEditsToPage()}
                    onMouseOut={(event) => this._undoEditsToPage()}
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
