import React from "react";


class LessDetailedAtomicElement extends React.Component {
	constructor(props) {
        super(props);
    }
	
	render() {		
		return (
            <div className={"bordered " + this.props.type}>
                <div className="lessDetailed centered">
                    {this.props.atomicNumber}
                </div>

                <div className="elementSymbol lessDetailed bolded centered">
                    {this.props.symbol}
                </div>

                <div className="lessDetailed centered">
                    {this.props.elementName}
                </div>

                <div className="lessDetailed centered">
                    {this.props.atomicWeight}
                </div>
            </div>
		);
	}
}

class MoreDetailedAtomicElement extends React.Component {
	constructor(props) {
        super(props);
	}
	
	render() {	
        return (

		);
	}
}

export {LessDetailedAtomicElement, MoreDetailedAtomicElement}
