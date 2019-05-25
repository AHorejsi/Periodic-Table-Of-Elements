import React from "react";
import PeriodicTable from "./PeriodicTable";
import {GroupNumbers, PeriodNumbers} from "./NumberPositions";


class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mainContent">
                <div className="grid container-fluid">
                    <GroupNumbers />
                    <PeriodNumbers />
                    <PeriodicTable json={this.props.json} />
                </div>
            </div>
        );
    }
}


export default MainContent
