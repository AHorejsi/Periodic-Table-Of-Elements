import React from "react";


class RangeBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let styling = {
            gridRow: this.props.gridRow,
            gridColumn: this.props.gridColumn,
            paddingTop: "0.8em",
            fontWeight: "bolder",
            color: "blue"
        };

        return (
            <div className={"bordered centered elemBox " + this.props.repType} style={styling}>
                {this.props.min + "-" + this.props.max}
            </div>
        );
    }
}


export default RangeBox
