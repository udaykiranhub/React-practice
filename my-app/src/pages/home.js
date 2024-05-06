import React from 'react';
import { useContext } from 'react';
import MyContext from './createContext.js'; // Import the context
import "../App.js";

//import Component1 from "../component.js";


function Home() {
 const  data  = useContext(MyContext); // Destructure data from context

  // Handle loading state and potential errors
 // let data=[{name:'uday' ,id:101},{name:"kiran",id:102},{name:"DOn",id:103},{name:"jon",id:104}]

    console.log("in home page:",data);

  return (
    <>
      <h1>Users</h1>
      <div className="user-profiles"> {/* Container for profiles */}
        {data.map((user, index) => ( // Use index as a fallback key
          <div className="profile" key={user.id || user.uniqueIdentifier || index}>
            <h1>{user.id}. Name is: {user.name}</h1>
          </div>
        ))}
      </div>
    </>

    );
}
export default Home;