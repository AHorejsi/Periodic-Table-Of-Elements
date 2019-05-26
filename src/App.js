import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Page from "./Page";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={() => <Page json={this.props.json} />} />
                </BrowserRouter>
            </div>
        );
    }
}


export default App
