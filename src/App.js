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
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [price, setPrice] = useState([0]);

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
      <div className="page-container">
        <div className="colum-menu">
          {categories.slice(0, 5).map((category, index) => {
            return (
              <Category
                key={index}
                bigTitle={category.name}
                meals={category.meals}
                data={data}
                cart={cart}
                setCart={setCart}
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
              />
            );
          })}
        </div>

        <ShoppingCart cart={cart} quantity={quantity} setQuantity={setQuantity} price={price} />
      </div>
    </div>
  );
}

export default App;
