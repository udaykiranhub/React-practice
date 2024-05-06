import React,{useState,useEffect} from "react";


function GetData(){
 const url="https://jsonplaceholder.typicode.com/users";
    const [users,setData]=useState([]);
    const fetechData=async (apiUrl)=>{
        var response=await fetch(apiUrl);
        var data=await response.json();
        console.log(data)
        setData(data);
    }

    useEffect(()=>{
        fetechData(url);
    },[])
    return (
        <div>
          {users.length > 0 ? (//jsx
            <ul>
              {/* Iterate over the users array and render each user */}
              {users.map((user) => (
                <li key={user.id}>
                  {/* Access user properties using dot notation */}
                  <h2>Name: {user.name}</h2>
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                  {/* ... (render other user properties as needed) */}
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      );
}

export default GetData;