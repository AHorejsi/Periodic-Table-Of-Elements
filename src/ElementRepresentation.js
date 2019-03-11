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
				
				<div className="lessDetailed bolded centered">
					{this.props.symbol}
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
			<div className={"bordered " + this.props.type}>
				<div className="moreDetailed centered">
					{this.props.atomicNumber}
				</div>
				
				<div className="moreDetailed bolded centered">
					{this.props.symbol}
				</div>
				
				<div className="moreDetailed centered">
					{this.props.elementName}
				</div>
				
				<div className="moreDetailed centered">
					{this.props.atomicWeight}
				</div>
			</div>
		);
	}
}

export {LessDetailedAtomicElement, MoreDetailedAtomicElement}
