import React from "react";


class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="titleDiv" className="centered bolded flex upperSection">
                <div className="bordered titleLetter">P</div>
                <div className="bordered titleLetter">e</div>
                <div className="bordered titleLetter">r</div>
                <div className="bordered titleLetter">i</div>
                <div className="bordered titleLetter">o</div>
                <div className="bordered titleLetter">d</div>
                <div className="bordered titleLetter">i</div>
                <div className="bordered titleLetter">c</div>

                <div className="titleSpace" />

                <div className="bordered titleLetter">T</div>
                <div className="bordered titleLetter">a</div>
                <div className="bordered titleLetter">b</div>
                <div className="bordered titleLetter">l</div>
                <div className="bordered titleLetter">e</div>

                <div className="titleSpace" />

                <div className="bordered titleLetter">o</div>
                <div className="bordered titleLetter">f</div>

                <div className="titleSpace" />

                <div className="bordered titleLetter">E</div>
                <div className="bordered titleLetter">l</div>
                <div className="bordered titleLetter">e</div>
                <div className="bordered titleLetter">m</div>
                <div className="bordered titleLetter">e</div>
                <div className="bordered titleLetter">n</div>
                <div className="bordered titleLetter">t</div>
                <div className="bordered titleLetter">s</div>
            </div>
        );
    }
}


export default Title

