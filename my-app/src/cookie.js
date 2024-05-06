import React from "react";
import Cookies from  "js-cookie";

function Cookie(){
function SetCookie(){
    //  const expires = new Date(now.getTime() + milliseconds);
    const expires = new Date(Date.now() + 5* 1000); // Calculate expiration in milliseconds
   Cookies.set("user",JSON.stringify({name:"kiran",pass:"!@$#"}),{expires});

alert("cookie set sucessfully!");
}

function GetCookie(){
    const data = Cookies.get("user"); // Retrieve the cookie data


 // Parse the JSON-encoded data
   if(data){
        const userData = JSON.parse(data);
    alert(`Retrieved user data: ${userData.name}, ${userData.pass}`); 
   }
   else{
    alert("cookie Expired!");
   }
    
  
}
return(
    <>
    <button onClick={()=>{SetCookie()}} >SetCookie</button>
    <br/>
    <br/>
    <button onClick={()=>{GetCookie()}}>GetCookie</button>
    </>
)

}

export default Cookie;