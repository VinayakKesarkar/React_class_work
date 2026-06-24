// import React from 'react'

import { useState } from "react";
import Greeting from "./Greeting";

export default function App() {
 
  // let name = "Vinayak"
  const[name , nameState]= useState("Vinayak");
  const[color , colorState]= useState("Bhagava");
  const[count, countState]= useState(0);

  return (
    <div>
      <Greeting name={name}/>
      <button onClick={()=>nameState("VK_Art")}>click to change</button>
      <h2>My favourite color is {color}</h2>
      <button onClick={()=>colorState("Bhagava Vadal")}>Click to view color</button>
      <h3>The count is {count}.</h3>
      <button onClick={()=>countState(count + 1)}>count</button>
    </div>
  )
}
