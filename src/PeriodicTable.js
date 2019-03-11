import React from "react";


class PeriodicTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.jsonData}
            </div>
        );
    }
}

export default PeriodicTable
