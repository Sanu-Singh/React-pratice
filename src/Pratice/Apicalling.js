import React,{useState} from "react";
// javascript is single-threaded ,synchronous language:
// single-threaded means one line at a time
// synchronous means one by one
// we get data from diff server using api
// methods 
// 1) Fetch = bring data from anywhere
// 2) axios
function Apicalling(){

    const [apidata, setapidata]=useState([]);
  // syntax of fetch
// fetch ("url")
async function callApi(){
    // async making asynchronous 
    // used await to wait 
const response=await fetch("https://fakestoreapi.com/products");
//console.log('response', response);
// convert respose in JSON
const data=await response.json();
// console.log('data', data);
setapidata(data);

}
return (
    <div>
        <p>Calling API 📞🤙...</p>
        
        <button onClick={()=> callApi()}>Get Data</button>
        {apidata.map((value)=>(
            <p>{value.price}</p>
        ))}
    </div>
);
}
export default Apicalling; 