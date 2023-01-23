import React,{useState} from "react";
import "./Hook.css";

//Hooks is used to call something 
function Hook(){
const [number,setNumber]=useState(0);

function addone(){
    const addition=number+1;
    setNumber(addition);
}

function Subtractone(){
    setNumber(number-1);
}
function reset(){
    setNumber(0);
}


return(
<div className="Hooks">
    <p>Click on Button to add</p>
    <p>{number}</p>
    <button onClick={addone}>Add!</button>
    <button onClick={Subtractone}>Subtract! to</button>
    <button onClick={reset}>Reset!</button>

</div>
);
}
export default Hook;