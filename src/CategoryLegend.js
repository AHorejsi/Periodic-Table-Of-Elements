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
                                onMouseOver={(event) => this._highlightCategory(["alkali", "alkaline", "transition-metal",
                                                                                "post-transition-metal", "actinoid", "lanthanoid"],
                                                                                "metalHead")}
                                onMouseOut={(event) => this._unhighlightCategory(["alkali", "alkaline", "transition-metal",
                                                                                 "post-transition-metal", "actinoid", "lanthanoid"],
                                                                                 "metalHead")}
								onClick={(event) => window.open("https://en.wikipedia.org/wiki/Metal")}>
                                Metals
                            </th>

                            <th id="nonmetalHead"
                                className="centered bolded columnPadding sideBorder handPointer"
                                onMouseOver={(event) => this._highlightCategory(["noble-gas", "nonmetal"], "nonmetalHead")}
                                onMouseOut={(event) => this._unhighlightCategory(["noble-gas", "nonmetal"], "nonmetalHead")}
								onClick={(event) => window.open("https://en.wikipedia.org/wiki/Nonmetal")}>
                                Nonmetals
                            </th>

                            <th id="otherHead"
                                className="centered bolded columnPadding handPointer"
                                onMouseOver={(event) => this._highlightCategory(["metalloid", "no-type"], "otherHead")}
                                onMouseOut={(event) => this._unhighlightCategory(["metalloid", "no-type"], "otherHead")}>
                                Other
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="columnPadding sideBorder">
                                <div className="metals">
                                    <div className="floatLeft">
                                        <div id="alkali-box"
                                             className="singleLineBoxSpace bordered alkali centered handPointer"
                                             onMouseOver={(event) => this._highlightType("alkali", "alkali-box")}
                                             onMouseOut={(event) => this._unhighlightType("alkali", "alkali-box")}
											 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Alkali_metal")}>
                                            Alkali
                                        </div>

                                        <div id="alkaline-box"
                                             className="singleLineBoxSpace bordered alkaline centered handPointer"
                                             onMouseOver={(event) => this._highlightType("alkaline", "alkaline-box")}
                                             onMouseOut={(event) => this._unhighlightType("alkaline", "alkaline-box")}
											 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Alkaline_earth_metal")}>
                                            Alkaline earth
                                        </div>

                                        <div id="transition-metal-box"
                                             className="doubleLineboxSpace bordered transition-metal centered handPointer"
                                             onMouseOver={(event) => this._highlightType("transition-metal", "transition-metal-box")}
                                             onMouseOut={(event) => this._unhighlightType("transition-metal", "transition-metal-box")}
											 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Transition_metal")}>
                                            Transition
                                            <br />
                                            metals
                                        </div>
                                    </div>

                                    <div className="floatRight">
                                        <div id="actinoid-box"
                                             className="singleLineBoxSpace bordered actinoid centered handPointer"
                                             onMouseOver={(event) => this._highlightType("actinoid", "actinoid-box")}
                                             onMouseOut={(event) => this._unhighlightType("actinoid", "actinoid-box")}
											 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Actinide")}>
                                            Actinoid
                                        </div>

                                        <div id="lanthanoid-box"
                                             className="singleLineBoxSpace bordered lanthanoid centered handPointer"
                                             onMouseOver={(event) => this._highlightType("lanthanoid", "lanthanoid-box")}
                                             onMouseOut={(event) => this._unhighlightType("lanthanoid", "lanthanoid-box")}
											 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Lanthanide")}>
                                            Lanthanoid
                                        </div>

                                        <div id="post-transition-metal-box"
                                             className="doubleLineboxSpace bordered post-transition-metal centered handPointer"
                                             onMouseOver={(event) => this._highlightType("post-transition-metal", "post-transition-metal-box")}
                                             onMouseOut={(event) => this._unhighlightType("post-transition-metal", "post-transition-metal-box")}
											 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Post-transition_metal")}>
                                            Post-transition metals
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className="columnPadding sideBorder">
                                <div id="noble-gas-box"
                                     className="singleLineBoxSpace bordered noble-gas centered handPointer"
                                     onMouseOver={(event) => this._highlightType("noble-gas", "noble-gas-box")}
                                     onMouseOut={(event) => this._unhighlightType("noble-gas", "noble-gas-box")}
									 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Noble_gas")}>
                                    Noble gases
                                </div>

                                <div id="nonmetal-box"
                                     className="singleLineboxSpace bordered nonmetal centered handPointer"
                                     onMouseOver={(event) => this._highlightType("nonmetal", "nonmetal-box")}
                                     onMouseOut={(event) => this._unhighlightType("nonmetal", "nonmetal-box")}>
                                    Other nonmetals
                                </div>
                            </td>

                            <td className="columnPadding">
                                <div id="metalloid-box"
                                     className="singleLineBoxSpace bordered metalloid centered handPointer"
                                     onMouseOver={(event) => this._highlightType("metalloid", "metalloid-box")}
                                     onMouseOut={(event) => this._unhighlightType("metalloid", "metalloid-box")}
									 onClick={(event) => window.open("https://en.wikipedia.org/wiki/Metalloids")}>
                                    Metalloids
                                </div>

                                <div id="no-type-box"
                                     className="singleLineBoxSpace bordered no-type centered handPointer"
                                     onMouseOver={(event) => this._highlightType("no-type", "no-type-box")}
                                     onMouseOut={(event) => this._unhighlightType("no-type", "no-type-box")}>
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
