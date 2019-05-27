import React from "react";
import $ from "jquery";


class ElementLegend extends React.Component {
	constructor(props) {
		super(props);
    }

    _highlightType(elementType, callerId) {
        $(".elemBox:not(." + elementType + ")").css({
            "opacity": "0.3",
            "filter": "alpha(opacity = 30)"
        });
        $("#" + callerId).css({
            "text-decoration": "underline"
        });

        if (elementType === "lanthanoid" || elementType === "actinoid") {
            $("#" + elementType + "RangeBox").css({
                "opacity": "1",
                "filter": "alpha(opacity = 100)"
            });
        }
    }

    _unhighlightType(elementType, callerId) {
        $(".elemBox:not(." + elementType + ")").css({
            "opacity": "1",
            "filter": "alpha(opacity = 100)"
        });
        $("#" + callerId).removeAttr("style");
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

        if (callerId === "metalHead") {
            $(".rangeBox").css({
                "opacity": "1",
                "filter": "alpha(opacity = 100)"
            });
        }
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
            <div id="categoryLegend" className="floatRight pointerCursor">
                <table>
                    <thead>
                        <tr className="bottomBorder">
                            <th id="metalHead"
                                className="centered bolded columnPadding sideBorder handPointer"
                                onMouseOver={(event) => this._highlightCategory(["alkali", "alkaline", "transitionMetal",
                                                                                "postTransitionMetal", "actinoid", "lanthanoid"],
                                                                                "metalHead")}
                                onMouseOut={(event) => this._unhighlightCategory(["alkali", "alkaline", "transitionMetal",
                                                                                 "postTransitionMetal", "actinoid", "lanthanoid"],
                                                                                 "metalHead")}
								onClick={(event) => window.open("https://en.wikipedia.org/wiki/Metal")}>
                                Metals
                            </th>

                            <th id="nonmetalHead"
                                className="centered bolded columnPadding sideBorder handPointer"
                                onMouseOver={(event) => this._highlightCategory(["nobleGas", "nonmetal"], "nonmetalHead")}
                                onMouseOut={(event) => this._unhighlightCategory(["nobleGas", "nonmetal"], "nonmetalHead")}
								onClick={(event) => window.open("https://en.wikipedia.org/wiki/Nonmetal")}>
                                Nonmetals
                            </th>

                            <th id="otherHead"
                                className="centered bolded columnPadding handPointer"
                                onMouseOver={(event) => this._highlightCategory(["metalloid", "noType"], "otherHead")}
                                onMouseOut={(event) => this._unhighlightCategory(["metalloid", "noType"], "otherHead")}>
                                Other
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="columnPadding sideBorder">
                                <div className="metals">
                                    <div className="floatLeft">
                                        <div id="alkaliBox"
                                             className="singleLineBoxSpace bordered alkali centered handPointer"
                                             onMouseOver={(event) => this._highlightType("alkali", "alkaliBox")}
                                             onMouseOut={(event) => this._unhighlightType("alkali", "alkaliBox")}
											 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Alkali_metal")}>
                                            Alkali
                                        </div>

                                        <div id="alkalineBox"
                                             className="singleLineBoxSpace bordered alkaline centered handPointer"
                                             onMouseOver={(event) => this._highlightType("alkaline", "alkalineBox")}
                                             onMouseOut={(event) => this._unhighlightType("alkaline", "alkalineBox")}
											 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Alkaline_earth_metal")}>
                                            Alkaline earth
                                        </div>

                                        <div id="transitionMetalBox"
                                             className="doubleLineboxSpace bordered transitionMetal centered handPointer"
                                             onMouseOver={(event) => this._highlightType("transitionMetal", "transitionMetalBox")}
                                             onMouseOut={(event) => this._unhighlightType("transitionMetal", "transitionMetalBox")}
											 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Transition_metal")}>
                                            Transition
                                            <br />
                                            metals
                                        </div>
                                    </div>

                                    <div className="floatRight">
                                        <div id="actinoidBox"
                                             className="singleLineBoxSpace bordered actinoid centered handPointer"
                                             onMouseOver={(event) => this._highlightType("actinoid", "actinoidBox")}
                                             onMouseOut={(event) => this._unhighlightType("actinoid", "actinoidBox")}
											 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Actinide")}>
                                            Actinoid
                                        </div>

                                        <div id="lanthanoidBox"
                                             className="singleLineBoxSpace bordered lanthanoid centered handPointer"
                                             onMouseOver={(event) => this._highlightType("lanthanoid", "lanthanoidBox")}
                                             onMouseOut={(event) => this._unhighlightType("lanthanoid", "lanthanoidBox")}
											 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Lanthanide")}>
                                            Lanthanoid
                                        </div>

                                        <div id="postTransitionMetalBox"
                                             className="doubleLineboxSpace bordered postTransitionMetal centered handPointer"
                                             onMouseOver={(event) => this._highlightType("postTransitionMetal", "postTransitionMetalBox")}
                                             onMouseOut={(event) => this._unhighlightType("postTransitionMetal", "postTransitionMetalBox")}
											 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Post-transition_metal")}>
                                            Post-transition metals
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className="columnPadding sideBorder">
                                <div id="nobleGasBox"
                                     className="singleLineBoxSpace bordered nobleGas centered handPointer"
                                     onMouseOver={(event) => this._highlightType("nobleGas", "nobleGasBox")}
                                     onMouseOut={(event) => this._unhighlightType("nobleGas", "nobleGasBox")}
									 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Noble_gas")}>
                                    Noble gases
                                </div>

                                <div id="nonmetalBox"
                                     className="singleLineboxSpace bordered nonmetal centered handPointer"
                                     onMouseOver={(event) => this._highlightType("nonmetal", "nonmetalBox")}
                                     onMouseOut={(event) => this._unhighlightType("nonmetal", "nonmetalBox")}>
                                    Other nonmetals
                                </div>
                            </td>

                            <td className="columnPadding">
                                <div id="metalloidBox"
                                     className="singleLineBoxSpace bordered metalloid centered handPointer"
                                     onMouseOver={(event) => this._highlightType("metalloid", "metalloidBox")}
                                     onMouseOut={(event) => this._unhighlightType("metalloid", "metalloidBox")}
									 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Metalloids")}>
                                    Metalloids
                                </div>

                                <div id="noTypeBox"
                                     className="singleLineBoxSpace bordered noType centered handPointer"
                                     onMouseOver={(event) => this._highlightType("noType", "noTypeBox")}
                                     onMouseOut={(event) => this._unhighlightType("noType", "noTypeBox")}>
                                    Unassigned
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
