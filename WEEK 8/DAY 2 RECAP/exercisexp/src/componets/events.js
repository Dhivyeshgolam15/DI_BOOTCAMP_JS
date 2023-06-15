import React from "react";
// ex2
class Event extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn:'true'

        }
    }
    render(){
        const handleClick=()=>{
            alert("I was clicked")
        }
        const handleKeyPress=(e)=>{
         if(e.keyCode === 13){
            alert(e.target.value)
         }

        }
        return(
            <div>
                <button onClick={handleClick}>Click me</button>
                <input type="text" onKeyDown={handleKeyPress}/>
                <button onClick={()=>this.setState({isToggleOn:!this.state.isToggleOn})}>{this.state.isToggleOn ? 'ON':'OFF'}</button>
            </div>
        )
        }

}
export default Event