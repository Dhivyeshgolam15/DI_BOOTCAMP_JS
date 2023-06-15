import React from "react";

class Garage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        size: "small",
        };
    }
    render() {
        return (
        <div>
            <h1>Who lives in my {this.state.size} garage?</h1>
        </div>
        );
    }
    }


// const size='small'

// const Garage = ()=>{
//     return(
//         <div>
//             <h1>Who lives in my {size} garage?</h1>
//         </div>
//     )
// }
export default Garage;