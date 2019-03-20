import React from "react";


class NumberRow extends React.Component {
	constructor(props) {
		super(props);
	}
	
    render() {
        let html = [];

        for (let index = 1; index <= 18; index++) {
            let value;

            if (index === 1) {
                value = <div className="number firstRowNumber bolded centered">{index}</div>;
            } 
            else if (index < 10) {
                value = <div className="number numberRow bolded centered">{index}</div>;
            }
            else {
                value = <div className="number doubleDigitNumberRow bolded centered">{index}</div>;
            }

            html.push(value);
        }

        return (
            <div className="columnNumbers">
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
            <div className="rowNumbers">
                <div className="columnOfNumbers">
                    {html}
                </div>
            </div>
		);
	}
}

export {NumberRow, NumberColumn}
