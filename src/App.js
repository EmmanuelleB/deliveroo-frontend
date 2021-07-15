import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const categories = data.categories;


  const fetchData = async () => {
    try {
      const response = await axios.get("https://my-deliveroo-app.herokuapp.com/");
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
        <div>
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
          <img src={data.restaurant.picture} alt="restaurant" style={{width:400}}/>
        </div>
     
       
        {categories.map(category=>{
          return( 
            <Menu bigTitle = {category.name} meals={category.meals} />
        
          )})
        }
      
      </div>

    )
   
  );
}

export default App;
