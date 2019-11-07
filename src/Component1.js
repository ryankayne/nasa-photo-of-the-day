import React from "react";

const Component1 = props => {
    return (
        <div className="photoCard" >
            <h1 style={{ "fontSize": "5rem" }}>{props.data.title}</h1>
            <h3>Date: {props.data.date}</h3>
            <img 
            className="apodImg" 
            alt="Astronomy Photo of the Day" 
            style ={{"width" :"50%", "height" : "50%", "boxShadow" : "7px 10px 10px", "border": "solid black 1px"}} 
            src={props.data.hdurl} />
            <p>
                <h3>Description: </h3> 
                {props.data.explanation}
            </p>
        </div>
    )
}

export default Component1;