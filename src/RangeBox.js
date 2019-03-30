import React from "react";


class RangeBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let gridStyling = {
            gridRow: this.props.gridRow,
            gridColumn: this.props.gridColumn
        };

        return (
            <div className={"bordered centered elemBox " + this.props.repType} style={gridStyling}>
                {this.props.min + "-" + this.props.max}
            </div>
        );
    }
}


export default RangeBox
