import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
 
  // Fetch data on component mount

    const fetchData = async () => {

        const response = await fetch(url);
        const fetchedData = await response.json();
       await  setData(fetchedData);
        alert(fetchedData);

    };

  fetchData();

  return [data];
}

export default useFetch;
