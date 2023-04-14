import React from "react";

class ClassComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world 1 {this.props.nama}</h1>
                <h1>Hello world 2</h1>
            </div>
        )
    }
}

export default ClassComponent;