import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3200/");
      setData(response.data);
      setIsLoading(false);

    } catch (error) {
      alert("An error occurred");
    }
  }

  useEffect(()=>{
    fetchData();
  }, []);

  return (
    isLoading ?
    (<span>En cours de chargement ...</span>)
    : (
      <div>
      <h1>{data.restaurant.name}</h1>
      <p>{data.restaurant.description}</p>
       </div>

    )
   
  );
}

export default App;
