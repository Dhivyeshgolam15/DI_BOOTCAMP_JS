import React from 'react';
import Garage from './garage';
class Cars extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:'blue'
        }
    }

    render(){
        return(
        <header>
            <h1>This car is {this.state.color} {this.props.model}</h1>
            <Garage/>
        </header>
        )
    }
}


export default Cars;