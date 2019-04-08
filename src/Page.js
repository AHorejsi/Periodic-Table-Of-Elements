import React from "react";
import Title from "./Title";
import TabSection from "./TabSection";
import MainContent from "./MainContent";


class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Title />
                <TabSection />
                <MainContent json={this.props.json} />
            </div>
        );
    }
}


export default Page

