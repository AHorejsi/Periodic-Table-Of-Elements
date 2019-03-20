import React from "react";


class ElementLegend extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
        return (
            <div className="legend">
                <table className="panel">
                    <thead className="panel-heading">
                        <tr className="bottomBorder">
                            <th className="centered bolded columnPadding sideBorder">Metals</th>
                            <th className="centered bolded columnPadding sideBorder">Nonmetals</th>
                            <th className="centered bolded columnPadding">Other</th>
                        </tr>
                    </thead>

                    <tbody className="panel-body">
                        <tr>
                            <td className="columnPadding sideBorder">
                                <div className="metals">
                                    <div className="floatLeft">
                                        <div className="singleLineBoxSpace bordered alkali centered">
                                            Alkali metals
                                    </div>

                                        <div className="singleLineBoxSpace bordered alkaline centered">
                                            Alkaline metals
                                    </div>

                                        <div className="singleLineBoxSpace bordered lanthanoid centered">
                                            Lanthanoid
                                        </div>
                                    </div>

                                    <div className="floatLeft">
                                        <div className="singleLineBoxSpace bordered actinoid centered">
                                            Actinoid
                                    </div>

                                        <div className="singleLineboxSpace bordered transition-metal centered">
                                            Transition metals
                                    </div>

                                        <div className="doubleLineboxSpace bordered post-transition-metal centered">
                                            Post-transition metals
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className="columnPadding sideBorder">
                                    <div className="singleLineBoxSpace bordered noble-gas centered">
                                        Noble gases
                                    </div>

                                    <div className="singleLineboxSpace bordered nonmetal centered">
                                        Other nonmetals
                                    </div>
                            </td>

                            <td className="columnPadding">
                                    <div className="singleLineBoxSpace bordered metalloid centered">
                                        Metalloids
                                    </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
		);
	}
}

export default ElementLegend
