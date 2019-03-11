"use strict";

import React from "react";


class LessDetailedAtomicElement {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="bordered">
				<div className="lessDetailed">
					{this.props.atomicNumber}
				</div>
				
				<div className="lessDetailed symbol">
					{this.props.symbol}
				</div>
			</div>
		);
	}
}

class MoreDetailedAtomicElement {
	constructor(props) {
		super(props);
	}
	
	render() {
		<div className="bordered">
			<div className="moreDetailed">
				{this.props.atomicNumber}
			</div>
			
			<div className="moreDetailed symbol">
				{this.props.symbol}
			</div>
			
			<div className="moreDetailed">
				{this.props.elementName}
			</div>
			
			<div className="moreDetailed">
				{this.props.atomicWeight}
			</div>
		</div>
	}
}