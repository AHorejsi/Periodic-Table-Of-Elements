import React from "react";


class NumberRow extends React.Component {
	constructor(props) {
		super(props);
    }

    _highlightColumn(index) {

    }

    _unhighlightColumn(index) {

    }
	
    render() {
        let html = [];

        for (let index = 1; index <= 18; index++) {
            let value;

            if (index === 1) {
                value = <div className="number firstRowNumber bolded centered"
                             onMouseOver={(event) => this._highlightColumn(index)}
                             onMouseOut={(event) => this._unhighlightColumn(index)}>{index}</div>;
            } 
            else if (index < 10) {
                value = <div className="number numberRow bolded centered"
                             onMouseOver={(event) => this._highlightColumn(index)}
                             onMouseOut={(event) => this._unhighlightColumn(index)}>{index}</div>;
            }
            else {
                value = <div className="number doubleDigitNumberRow bolded centered"
                             onMouseOver={(event) => this._highlightColumn(index)}
                             onMouseOut={(event) => this._unhighlightColumn(index)}>{index}</div>;
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
	
    render() {
        let html = [];

        for (let index = 1; index <= 7; index++) {
            let value;

            if (index === 1) {
                value = <div className="number firstColumnNumber bolded centered">{index}</div>;
            }
            else {
                value = <div className="number numberColumn bolded centered">{index}</div>;
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
