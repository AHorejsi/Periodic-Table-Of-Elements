import React from "react";
import $ from "jquery";


class NumberRow extends React.Component {
	constructor(props) {
		super(props);
    }

    _highlightColumn(groupNumber) {
        let htmlElement = $("#group" + groupNumber + "ElementSet");

        htmlElement.removeClass("unhighlight");
        htmlElement.addClass("highlight");

        this._highlightRelevantElements(groupNumber);
    }

    _highlightRelevantElements(groupNumber) {
        let groupedElements = $(".group" + groupNumber);
    }

    _unhighlightColumn(groupNumber) {
        let htmlElement = $("#group" + groupNumber + "ElementSet");

        htmlElement.removeClass("highlight");
        htmlElement.addClass("unhighlight");
    }
	
    render() {
        let html = [];

        for (let index = 1; index <= 18; index++) {
            let value;

            if (index === 1) {
                value = <a id={"group" + index + "ElementSet"}
                           className="number firstRowNumber bolded centered handPointer textColor unhighlight"
                           onMouseOver={(event) => this._highlightColumn(index)}
                           onMouseOut={(event) => this._unhighlightColumn(index)}
                           onClick={(event) => window.open("https://en.wikipedia.org/wiki/Group_" + index + "_element")}>
                            {index}
                        </a>;
            } 
            else if (index < 10) {
                value = <a id={"group" + index + "ElementSet"}
                           className="number numberRow bolded centered handPointer textColor unhighlight"
                           onMouseOver={(event) => this._highlightColumn(index)}
                           onMouseOut={(event) => this._unhighlightColumn(index)}
                           onClick={(event) => window.open("https://en.wikipedia.org/wiki/Group_" + index + "_element")}>
                            {index}
                        </a>;
            }
            else {
                value = <a id={"group" + index + "ElementSet"}
                           className="number doubleDigitNumberRow bolded centered handPointer textColor unhighlight"
                           onMouseOver={(event) => this._highlightColumn(index)}
                           onMouseOut={(event) => this._unhighlightColumn(index)}
                           onClick={(event) => window.open("https://en.wikipedia.org/wiki/Group_" + index + "_element")}>
                            {index}
                        </a>;
            }

            html.push(value);
        }

        return (
            <div id="columnNumbers">
                <div className="rowOfNumbers">
                    {html}
                </div>
            </div>
		);
	}
}

class NumberColumn extends React.Component {
	constructor(props) {
		super(props);
    }

    _highlightRow(periodNumber) {
        let htmlElement = $("#period" + periodNumber + "ElementSet");

        htmlElement.removeClass("unhighlight");
        htmlElement.addClass("highlight");
    }

    _unhighlightRow(periodNumber) {
        let htmlElement = $("#period" + periodNumber + "ElementSet");

        htmlElement.removeClass("highlight");
        htmlElement.addClass("unhighlight");
    }
	
    render() {
        let html = [];

        for (let index = 1; index <= 7; index++) {
            let value;

            if (index === 1) {
                value = <a id={"period" + index + "ElementSet"}
                           className="number firstColumnNumber bolded centered handPointer textColor unhighlight"
                           onMouseOver={(event) => this._highlightRow(index)}
                           onMouseOut={(event) => this._unhighlightRow(index)}
                           onClick={(event) => window.open("https://en.wikipedia.org/wiki/Period_" + index + "_element")}>
                            {index}
                        </a>;
            }
            else {
                value = <a id={"period" + index + "ElementSet"}
                           className="number numberColumn bolded centered handPointer textColor unhighlight"
                           onMouseOver={(event) => this._highlightRow(index)}
                           onMouseOut={(event) => this._unhighlightRow(index)}
                           onClick={(event) => window.open("https://en.wikipedia.org/wiki/Period_" + index + "_element")}>
                            {index}
                        </a>;
            }

            html.push(value);
        }

        return (
            <div id="rowNumbers">
                <div className="columnOfNumbers">
                    {html}
                </div>
            </div>
		);
	}
}

export {NumberRow, NumberColumn}
