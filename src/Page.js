import React from "react";
import Title from "./Title";
import MainContent from "./MainContent";


class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Title />

                <div class="flex" style={{ justifyContent: "center" }}>
                    <MainContent json={this.props.json} />
                </div>
            </div>
        );
    }
}


export default Page
