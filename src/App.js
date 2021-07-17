import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Presentation from "./components/presentation/Presentation";
import Category from "./components/category/Category";

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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
    <div>
      <Header />
      <Presentation data={data} />
      {categories.slice(0, 5).map((category) => {
        return <Category bigTitle={category.name} meals={category.meals} />;
      })}
    </div>
  );
}

export default App;
