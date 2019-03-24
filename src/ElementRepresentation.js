import React from "react";


var angular = require("angular");
var $ = require("jquery");

class AtomicElement extends React.Component {
	constructor(props) {
        super(props);
    }
	
    render() {
        let $scope = angular.element($("#main")).scope();

        return (
            <div id={this.props.elementName} className={"bordered " + this.props.type}>
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
