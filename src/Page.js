import React from "react";
import PeriodicTable from "./PeriodicTable";
import {NumberRow, NumberColumn} from "./NumberPositions";


class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid">
                <NumberRow />
                <NumberColumn />
                <PeriodicTable />
            </div>
        );
    }
}


export default Page
