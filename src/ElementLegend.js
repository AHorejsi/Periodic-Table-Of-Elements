import React from "react";


class ElementLegend extends React.Component {
	constructor(props) {
		super(props);
	}
	
    render() {
        return (
            <div className="floatRight legendHeight pointerCursor">
                <table className="panel">
                    <thead className="panel-heading">
                        <tr className="bottomBorder">
                            <th className="centered bolded columnPadding sideBorder handPointer">Metals</th>
                            <th className="centered bolded columnPadding sideBorder handPointer">Nonmetals</th>
                            <th className="centered bolded columnPadding handPointer">Other</th>
                        </tr>
                    </thead>

                    <tbody className="panel-body">
                        <tr>
                            <td className="columnPadding sideBorder">
                                <div className="metals">
                                    <div className="floatLeft">
                                        <div className="singleLineBoxSpace bordered alkali centered handPointer">
                                            Alkali metals
                                        </div>

                                        <div className="singleLineBoxSpace bordered alkaline centered handPointer">
                                            Alkaline metals
                                        </div>

                                        <div className="doubleLineboxSpace bordered transition-metal centered handPointer">
                                            Transition
                                            <br />
                                            metals
                                        </div>
                                    </div>

                                    <div className="floatRight">
                                        <div className="singleLineBoxSpace bordered actinoid centered handPointer">
                                            Actinoid
                                        </div>

                                        <div className="singleLineBoxSpace bordered lanthanoid centered handPointer">
                                            Lanthanoid
                                        </div>

                                        <div className="doubleLineboxSpace bordered post-transition-metal centered handPointer">
                                            Post-transition metals
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className="columnPadding sideBorder">
                                    <div className="singleLineBoxSpace bordered noble-gas centered handPointer">
                                        Noble gases
                                    </div>

                                    <div className="singleLineboxSpace bordered nonmetal centered handPointer">
                                        Other nonmetals
                                    </div>
                            </td>

                            <td className="columnPadding">
                                    <div className="singleLineBoxSpace bordered metalloid centered handPointer">
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
