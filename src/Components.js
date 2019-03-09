"use strict";

import React from "react";

class LessDetailedAtomicElement {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="bordered">
				<div className="lessDetailedAtomicNumber">
					{this.props.atomicNumber}
				</div>
				
				<div className="lessDetailedSymbol">
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
		
	}
}

class PeriodicTable {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			
		);
	}
}
