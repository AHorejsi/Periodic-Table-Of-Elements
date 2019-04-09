import React from "react";
import PeriodicTable from "./PeriodicTable";
import {GroupNumbers, PeriodNumbers} from "./NumberPositions";


class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid">
                <GroupNumbers />
                <PeriodNumbers />
                <PeriodicTable json={this.props.json} />
            </div>
        );
    }
}


export default MainContent
