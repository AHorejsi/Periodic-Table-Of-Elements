import React from "react";


class ElementLegend extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<table className="bordered">
				<tr className="legendTop">
					<td className="legendSide centered tablePadding bolded">Metals</td>
					<td className="legendSide centered tablePadding bolded">Nonmetals</td>
					<td className="centered tablePadding bolded">Other</td>
				</tr>
				
				<tr>
					<td className="legendSide tablePadding">
						<span className="boxPadding">
							<span className="bordered alkali legendBox" />
						</span>
						Alkali metals
					</td>
					<td className="legendSide tablePadding">
						<span className="boxPadding">
							<span className="bordered noble-gas legendBox" />
						</span>
						Noble gases
					</td>
					<td className="tablePadding">
						<span className="boxPadding">
							<span className="bordered metalloid legendBox" />
						</span>
						Metalloids
					</td>
				</tr>
				
				<tr>
					<td className="legendSide tablePadding">
						<span className="boxPadding">
							<span className="bordered alkaline legendBox" />
						</span>
						Alkaline metals
					</td>
					<td className="legendSide tablePadding">
						<span className="boxPadding">
							<span className="bordered nonmetal legendBox" />
						</span>
						Other nonmetals
					</td>
					<td />
				</tr>
				
				<tr>
					<td className="legendSide tablePadding">
						<span className="boxPadding">
							<span className="bordered lanthanoid legendBox" />
						</span>
						Lanthanoid
					</td>
					<td className="legendSide" />
					<td />
				</tr>
				
				<tr>
					<td className="legendSide tablePadding">
						<span className="boxPadding">
							<span className="bordered actinoid legendBox" />
						</span>
						Actinoid
					</td>
					<td className="legendSide" />
					<td />
				</tr>
				
				<tr>
					<td className="legendSide tablePadding">
						<span className="boxPadding">
							<span className="bordered transition-metal legendBox" />
						</span>
						Transition metals
					</td>
					<td className="legendSide" />
					<td />
				</tr>
				
				<tr>
					<td className="legendSide tablePadding">
						<span className="boxPadding">
							<span className="bordered post-transition-metal legendBox" />
						</span>
						Post-transition metals
					</td>
					<td className="legendSide" />
					<td />
				</tr>
			</table>
		);
	}
}

export default ElementLegend
