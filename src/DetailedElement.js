import React from "react";


var jsonData = require("./ElementJSON");

class DetailedElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let html = [];

        console.log(jsonData.elementJSON.hydrogen);

        for (let element in jsonData.elementJSON) {
            let innerHTML = (
                <div ng-switch-when={element} className={"bordered centered detailedElement" + element.type}>
                    <div>
                        {element.atomicNumber}
                    </div>

                    <div>
                        {element.symbol}
                    </div>

                    <div>
                        {element.name}
                    </div>

                    <div>
                        {element.atomicWeight}
                    </div>
                </div>
            );

            html.push(innerHTML);
        }

        html.push(
            <div className="bordered detailedElement" ng-switch-default></div>
        );

        return (
            <div ng-switch="selectedElement">
                {html}
            </div>
        );
    }
}

export default DetailedElement
