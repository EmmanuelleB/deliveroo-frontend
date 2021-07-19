import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Presentation from "./components/presentation/Presentation";
import Category from "./components/category/Category";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

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
      <div className="page-container">
        <div className="colum-menu">
          {data.categories.slice(0, 5).map((category, index) => {
            return (
              <Category
                key={index}
                name={category.name}
                meals={category.meals}
                products={products}
                setProducts={setProducts}
              />
            );
          })}
        </div>

        <ShoppingCart products={products} />
      </div>
    </div>
  );
}

export default App;
