import {Component} from "react";

class C1 extends Component{
    constructor(){
        super();
        this.state = {name:"Vamsi",power:false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (){
        alert(this.state.name);
    }

    handleClick2 = () => {
        this.setState({
            power : !this.state.power
        })
    }

    render(){
        return (
            <div>
            <button onClick = {this.handleClick}>Click button</button>
            <button onClick = {this.handleClick2}>Switch - {(this.state.power)?"ON" : "OFF"}</button>
            </div>
        );
    }
}

export default C1 ;