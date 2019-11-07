import React, { useState, useEffect } from "react";
import axios from "axios";
import Component1 from "./Component1";

export default function Component2() {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=V9RF48OWuCUYZEEw4thkeTw7oKTZN1avR4yvaFCP`)
      .then(response => {
        console.log(response);
        setApod(response.data)
      })
      .catch(error => {
        console.log("Uh-oh, there seems to be a problem...", error);
      });
  }, []);

  return (
    <div className="container">
      <Component1 data ={apod} />
    </div>
  );
}

// title={apod.title} imgUrl={apod.hdurl} description={apod.explanation} date={apod.date}