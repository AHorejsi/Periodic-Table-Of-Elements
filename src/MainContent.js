import React from "react";
import PeriodicTable from "./PeriodicTable";
import {NumberRow, NumberColumn} from "./NumberPositions";


class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid">
                <NumberRow />
                <NumberColumn />
                <PeriodicTable json={this.props.json} />
            </div>
        );
    }
}


export default MainContent
