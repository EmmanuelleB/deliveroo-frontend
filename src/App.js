import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ReactLoading from "react-loading";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Presentation from "./components/presentation/Presentation";
import Category from "./components/category/Category";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

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
    <div className="center">
      <ReactLoading type="bubbles" color="#02cdbd" height={300} width={150} />
    </div>
  ) : (
    <div>
      <Header />
      <Presentation data={data} />
      <div className="page-container flex">
        <div className="column-menu">
          {data.categories.map((category, index) => {
            if (category.meals.length === 0) {
              return null;
            } else {
              return (
                <Category
                  key={index}
                  name={category.name}
                  meals={category.meals}
                  products={products}
                  setProducts={setProducts}
                />
              );
            }
          })}
        </div>
        <div className="column-shoppingCart">
          <ShoppingCart products={products} setProducts={setProducts} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
