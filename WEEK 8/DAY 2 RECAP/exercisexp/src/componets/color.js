import React from "react";

class Color extends React.Component{
    constructor(props) {
      super(props);
      this.state = { color: 'red' };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({ color: 'yellow' });
      }, 5000);
    }
    render() {
        const favoriteColor = ()=>{
            this.setState({color:"blue"})
        }
      return (
        <div>
            <h1>My favorite color is {this.state.color} </h1>
            <button onClick={favoriteColor}>favoriteColor</button>
        </div>
      );
    }
  }
export default Color