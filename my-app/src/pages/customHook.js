import React, { useEffect } from "react";

//import useFetch from "../useFetch"; // Assuming `useFetch.js` is in the same directory
import { useState } from "react";

function Custom() {

const [data,setData]=useState([]);


useEffect(function(){

  async function find(){
  const res=await fetch("https://jsonplaceholder.typicode.com/posts");
  const val=await res.json();
  setData(val);
  console.log("data is:",val[0].title);
     
  }
  
  
  find();
},[]);

  return (
    <div>
    <h1>Data:</h1>
    {data.map((user) => (
      <h1 key={user.id}>{user.id}</h1> // Added key prop
    ))}
  </div>
  
  );
}
export default Custom;