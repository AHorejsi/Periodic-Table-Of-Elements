import React from "react";


var app = require("./AngularSetup").angularApp;

class AtomicElement extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            val: "true"
        };
    }

    _recordSelectedElement(event) {
        this.state.val = "false";
    }
	
    render() {
        

        return (
            <div id={this.props.elementName} className={"bordered " + this.props.type}
                onMouseOver={(event) => this._recordSelectedElement(event)}>
				<div className="centered">
					{this.props.atomicNumber}
				</div>

                <div className="elementSymbol lessDetailed bolded centered">
					{this.props.symbol}
                </div>

                <div>
                    {this.state.val}
                </div>
			</div>
		);
	}
}

export default AtomicElement
