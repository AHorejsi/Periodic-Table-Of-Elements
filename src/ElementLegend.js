import React from "react";
import $ from "jquery";


class ElementLegend extends React.Component {
	constructor(props) {
		super(props);
    }

    _highlightType(elementType) {
        $(".elemBox:not(." + elementType + ")").css({
            "opacity": "0.3",
            "filter": "alpha(opacity = 30)"
        });
    }

    _unhighlightType(elementType) {
        $(".elemBox:not(." + elementType + ")").css({
            "opacity": "1",
            "filter": "alpha(opacity = 100)"
        });
    }

    _highlightCategory(listOfTypes, callerId) {
        $("#" + callerId).css({
            "text-decoration": "underline",
            "background-color": "lightgray"
        });
        $(".elemBox:not(." + listOfTypes.join(", .") + ")").css({
            "opacity": "0.3",
            "filter": "alpha(opacity = 30)"
        });
    }

    _unhighlightCategory(listOfTypes, callerId) {
        $("#" + callerId).removeAttr("style");
        $(".elemBox:not(." + listOfTypes.join(", .") + ")").css({
            "opacity": "1",
            "filter": "alpha(opacity = 100)"
        });
    }
	
    render() {
        return (
            <div className="floatRight legendHeight pointerCursor">
                <table className="panel">
                    <thead className="panel-heading">
                        <tr className="bottomBorder">
                            <th id="metalHead"
                                className="centered bolded columnPadding sideBorder handPointer"
                                onMouseOver={(event) => this._highlightCategory(["alkali", "alkaline", "transition-metal", "post-transition-metal", "actinoid", "lanthanoid"], "metalHead")}
                                onMouseOut={(event) => this._unhighlightCategory(["alkali", "alkaline", "transition-metal", "post-transition-metal", "actinoid", "lanthanoid"], "metalHead")}>
                                Metals
                            </th>

                            <th id="nonmetalHead"
                                className="centered bolded columnPadding sideBorder handPointer"
                                onMouseOver={(event) => this._highlightCategory(["noble-gas", "nonmetal"], "nonmetalHead")}
                                onMouseOut={(event) => this._unhighlightCategory(["noble-gas", "nonmetal"], "nonmetalHead")}>
                                Nonmetals
                            </th>

                            <th id="otherHead"
                                className="centered bolded columnPadding handPointer"
                                onMouseOver={(event) => this._highlightCategory(["metalloid"], "otherHead")}
                                onMouseOut={(event) => this._unhighlightCategory(["metalloid"], "otherHead")}>
                                Other
                            </th>
                        </tr>
                    </thead>

                    <tbody className="panel-body">
                        <tr>
                            <td className="columnPadding sideBorder">
                                <div className="metals">
                                    <div className="floatLeft">
                                        <div className="singleLineBoxSpace bordered alkali centered handPointer"
                                             onMouseOver={(event) => this._highlightType("alkali")}
                                             onMouseOut={(event) => this._unhighlightType("alkali")}>
                                            Alkali metals
                                        </div>

                                        <div className="singleLineBoxSpace bordered alkaline centered handPointer"
                                             onMouseOver={(event) => this._highlightType("alkaline")}
                                             onMouseOut={(event) => this._unhighlightType("alkaline")}>
                                            Alkaline metals
                                        </div>

                                        <div className="doubleLineboxSpace bordered transition-metal centered handPointer"
                                             onMouseOver={(event) => this._highlightType("transition-metal")}
                                             onMouseOut={(event) => this._unhighlightType("transition-metal")}>
                                            Transition
                                            <br />
                                            metals
                                        </div>
                                    </div>

                                    <div className="floatRight">
                                        <div className="singleLineBoxSpace bordered actinoid centered handPointer"
                                             onMouseOver={(event) => this._highlightType("actinoid")}
                                             onMouseOut={(event) => this._unhighlightType("actinoid")}>
                                            Actinoid
                                        </div>

                                        <div className="singleLineBoxSpace bordered lanthanoid centered handPointer"
                                             onMouseOver={(event) => this._highlightType("lanthanoid")}
                                             onMouseOut={(event) => this._unhighlightType("lanthanoid")}>
                                            Lanthanoid
                                        </div>

                                        <div className="doubleLineboxSpace bordered post-transition-metal centered handPointer"
                                             onMouseOver={(event) => this._highlightType("post-transition-metal")}
                                             onMouseOut={(event) => this._unhighlightType("post-transition-metal")}>
                                            Post-transition metals
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className="columnPadding sideBorder">
                                <div className="singleLineBoxSpace bordered noble-gas centered handPointer"
                                     onMouseOver={(event) => this._highlightType("noble-gas")}
                                     onMouseOut={(event) => this._unhighlightType("noble-gas")}>
                                    Noble gases
                                </div>

                                <div className="singleLineboxSpace bordered nonmetal centered handPointer"
                                     onMouseOver={(event) => this._highlightType("nonmetal")}
                                     onMouseOut={(event) => this._unhighlightType("nonmetal")}>
                                    Other nonmetals
                                </div>
                            </td>

                            <td className="columnPadding">
                                <div className="singleLineBoxSpace bordered metalloid centered handPointer legendData"
                                     onMouseOver={(event) => this._highlightType("metalloid")}
                                     onMouseOut={(event) => this._unhighlightType("metalloid")}>
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
