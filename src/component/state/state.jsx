import { Component } from "react";

class State extends Component {
    constructor() {
        super();
        this.state = {
            content: "State Concept",
            cnt: 0,
        };
        
    }
    updateState = () => {
        // alert("Working")
        this.setState({
            content: "State Concept Changed"
        })
    }

    inccnt = () => {
        this.setState({
            cnt: this.state.cnt+1
        });
    }
    render() {
        return (
            <div>
                <div>
                    <h2>{this.state.content}</h2>
                    <button onClick={this.updateState}>Change Content</button>
                </div>
                <br></br>
                <br></br>
                <div>
                    <p>Count Value is : {this.state.cnt}</p>
                    <button onClick={this.inccnt}>Inc Count</button>
                </div>
            </div>
        );
    }
}
export default State;