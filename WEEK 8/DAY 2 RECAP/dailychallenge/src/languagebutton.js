import React from 'react';

class LanguagesButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            votes: this.props.votes,
            name:this.props.name
        }
    }
    increaseVote = () => {
        this.setState({votes: this.state.votes + 1})
    }
    render(){
        return(
            <div>
            <span>{this.state.votes}</span>
            <span>{this.state.name}</span>
            <button onClick={this.increaseVote}>Click Here</button>
            </div>
        )
    }
}
export default LanguagesButton;