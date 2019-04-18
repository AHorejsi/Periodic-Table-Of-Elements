import React from "react";
import $ from "jquery";


class GroupNumbers extends React.Component {
	constructor(props) {
        super(props);
    }

    _highlightColumn(groupNumber) {
        $("#group" + groupNumber + "ElementSet").css({"background-color": "yellow"});
        $(".elemBox:not(.group" + groupNumber + ")").css({
            "opacity": "0.3",
            "filter": "alpha(opacity = 30)"
        });;
    }

    _unhighlightColumn(groupNumber) {
        $("#group" + groupNumber + "ElementSet").css({"background-color": "white"});
        $(".elemBox:not(.group" + groupNumber + ")").css({
            "opacity": "1",
            "filter": "alpha(opacity = 100)"
        });
    }
	
    render() {
        let html = [];

        for (let index = 1; index <= 18; index++) {
            let value;

            if (index === 1) {
                value = <a id="group1ElementSet"
                           className="number firstRowNumber bolded centered handPointer textColor"
                           href="https://en.wikipedia.org/wiki/Group_1_element"
                           onMouseOver={(event) => this._highlightColumn(index)}
                           onMouseOut={(event) => this._unhighlightColumn(index)}>
                            {index}
                        </a>;
            } 
            else if (index < 10) {
                value = <a id={"group" + index + "ElementSet"}
                           className="number numberRow bolded centered handPointer textColor"
                           href={"https://en.wikipedia.org/wiki/Group_" + index + "_element"}
                           onMouseOver={(event) => this._highlightColumn(index)}
                           onMouseOut={(event) => this._unhighlightColumn(index)}>
                            {index}
                        </a>;
            }
            else {
                value = <a id={"group" + index + "ElementSet"}
                           className="number doubleDigitNumberRow bolded centered handPointer textColor"
                           href={"https://en.wikipedia.org/wiki/Group_" + index + "_element"}
                           onMouseOver={(event) => this._highlightColumn(index)}
                           onMouseOut={(event) => this._unhighlightColumn(index)}>
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

class PeriodNumbers extends React.Component {
	constructor(props) {
		super(props);
    }

    _highlightRow(periodNumber) {
        let htmlElement = $("#period" + periodNumber + "ElementSet");

        htmlElement.css({"background-color": "yellow"});

        $(".elemBox:not(.period" + periodNumber + ")").css({
            "opacity": "0.3",
            "filter": "alpha(opacity = 30)"
        });;
    }

    _unhighlightRow(periodNumber) {
        let htmlElement = $("#period" + periodNumber + "ElementSet");

        htmlElement.css({"background-color": "white"});

        $(".elemBox:not(.period" + periodNumber + ")").css({
            "opacity": "1",
            "filter": "alpha(opacity = 100)"
        });
    }
	
    render() {
        let html = [];

        for (let index = 1; index <= 7; index++) {
            let value;

            if (index === 1) {
                value = <a id="period1ElementSet"
                           className="number firstColumnNumber bolded centered handPointer textColor unhighlightNumber"
                           href="https://en.wikipedia.org/wiki/Period_1_element"
                           onMouseOver={(event) => this._highlightRow(index)}
                           onMouseOut={(event) => this._unhighlightRow(index)}>
                            {index}
                        </a>;
            }
            else {
                value = <a id={"period" + index + "ElementSet"}
                           className="number numberColumn bolded centered handPointer textColor unhighlightNumber"
                           href={"https://en.wikipedia.org/wiki/Period_" + index + "_element"}
                           onMouseOver={(event) => this._highlightRow(index)}
                           onMouseOut={(event) => this._unhighlightRow(index)}>
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


export {GroupNumbers, PeriodNumbers}
