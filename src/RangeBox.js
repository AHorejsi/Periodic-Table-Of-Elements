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
            color: "rgb(55, 11, 142)"
        };

        return (
            <div className={"bordered centered elemBox cursorPointer " + this.props.repType} style={styling}>
                {this.props.min + "-" + this.props.max}
            </div>
        );
    }
}


export default RangeBox
