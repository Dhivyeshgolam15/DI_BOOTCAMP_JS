import React from "react";
const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
const Exercise4 =() =>{
    return (
        <div>


        <div style={{textAlign:"center"}}>

        {/* <h1 style={{color:'red', backgroundColor:'ligthblue'}}>This is a header </h1> */}
        <h1 style={style_header}>This is a header </h1>
        <p>This is a paragraph </p>
        <a href='#'>This is a link</a>
        <form>
            <h2>This is a form
            </h2>
            <label for="fname">Enter yout name:</label><br/>
            <input type="text" id="fname" name="fname"/>
            <button>submit</button>
        </form>

         <p>Here is an image:</p>
          <img src=""></img>
        <ul>

            <h2>This is a list </h2>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>

        </ul>
       </div>
     </div>


    )


}

export default Exercise4;


