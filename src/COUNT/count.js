import React from "react"


// This is a functional component named Count, which will render the count value passed as a prop.
// this function was added, not in the original code , added to meet below challenge 



export default function Count(props){
    console.log("Count component rendered")


    return(
      <div className="number--div">
        <h1>
         {props.number}
        </h1>
      </div>
    )
  }
 