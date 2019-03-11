"use strict";

import React from "react";


class ElementLegend extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<table className="bordered">
				<tr className="legendTop">
					<td>"Metals"</td>
					<td>"Nonmetals"</td>
					<td>"Other"</td>
				</tr>
			</table>
		);
	}
}
