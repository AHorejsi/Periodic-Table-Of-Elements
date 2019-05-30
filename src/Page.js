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

                <div className="flex" style={{ justifyContent: "center" }}>
                    <MainContent />
                </div>
            </div>
        );
    }
}


export default Page
