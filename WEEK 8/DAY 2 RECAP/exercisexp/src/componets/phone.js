import React from "react";

class Phone extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        }
    }

    render(){
        const ChangeColor= ()=>{
            this.setState({color:"blue"})
        }
        return(
            <div>
                <h1>My phone is a {this.state.brand}</h1>
                <h4> it is a {this.state.color} {this.state.model} from {this.state.year}</h4>
                <button onClick={ChangeColor}>Change color</button>
            </div>
        )
    }
}
export default Phone