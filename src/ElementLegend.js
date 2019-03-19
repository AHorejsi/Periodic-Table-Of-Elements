import React from "react";


class ElementLegend extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
            <div>
                <table className="panel">
                    <thead className="panel-heading">
                        <tr>
                            <th className="centered tablePadding bolded">Metals</th>
                            <th className="centered tablePadding bolded">Nonmetals</th>
                            <th className="centered tablePadding bolded">Other</th>
                        </tr>
                    </thead>

                    <tbody className="panel-body">
                        <tr>
                            <td className="tablePadding">
                                <span className="boxPadding">
                                    <span className="bordered alkali legendBox">
                                        Alkali metals
                                </span>
                                </span>
                            </td>
                            <td className="tablePadding">
                                <span className="boxPadding">
                                    <span className="bordered noble-gas legendBox">
                                        Noble gases
                                </span>
                                </span>
                            </td>
                            <td className="tablePadding">
                                <span className="boxPadding">
                                    <span className="bordered metalloid legendBox">
                                        Metalloids
                                </span>
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td className="tablePadding">
                                <span className="boxPadding">
                                    <span className="bordered alkaline legendBox">
                                        Alkaline metals
                                </span>
                                </span>
                            </td>
                            <td className="tablePadding">
                                <span className="boxPadding">
                                    <span className="bordered nonmetal legendBox">
                                        Other nonmetals
                                </span>
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td className="tablePadding">
                                <span className="boxPadding">
                                    <span className="bordered lanthanoid legendBox">
                                        Lanthanoid
                                </span>
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td className="tablePadding">
                                <span className="boxPadding">
                                    <span className="bordered actinoid legendBox">
                                        Actinoid
                                </span>
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td className="tablePadding">
                                <span className="boxPadding">
                                    <span className="bordered transition-metal legendBox">
                                        Transition metals
                                </span>
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td className="tablePadding">
                                <span className="boxPadding">
                                    <span className="bordered post-transition-metal legendBox">
                                        Post-transition metals
                                </span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
		);
	}
}

export default ElementLegend
