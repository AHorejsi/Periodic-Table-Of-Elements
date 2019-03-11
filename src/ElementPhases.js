import React from "react";


class ElementPhase extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="phaseDiv">
                <span className={"phaseBorder phaseElement centered bolded " + this.props.phase}>
                    {this.props.symbolText}
                </span>
                <span className={this.props.phase}>
                    {this.props.phase.charAt(0).toUpperCase() + this.props.phase.substring(1)}
                </span>
            </div>
        );
    }
}

class ElementPhaseTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bordered">
                <ElementPhase symbolText="S" phase="solid" />
                <ElementPhase symbolText="L" phase="liquid" />
                <ElementPhase symbolText="G" phase="gas" />
                <ElementPhase symbolText="Uk" phase="unknown" />
            </div>
        );
    }
}

export default ElementPhaseTable
