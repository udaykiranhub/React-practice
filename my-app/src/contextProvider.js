// Example (assuming data is retrieved from an API)
import MyContext from './pages/createContext.js';
import { useEffect, useState } from 'react'; // For fetching data
import Home from "./pages/home.js";
function Parent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API and update context
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((userData) => setData(userData));
  }, []); // Empty dependency array to fetch data only once
  console.log("data is:",data);

  //let x=[{name:'uday' ,id:101},{name:"kiran",id:102},{name:"DOn",id:103},{name:"jon",id:104}]
  const users = data.map(({ name, age }) => ({ name, age }));
  return (

    <MyContext.Provider value={data}>
      <Home /> {/* Other components that need context */}
    </MyContext.Provider>
  );
}

export default Parent;