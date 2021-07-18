import "./Category.css";
import Menu from "../menu/Menu";

const Categoty = (props) => {
  const { bigTitle, meals, data, cart, setCart, quantity, setQuantity, price, setPrice } = props;

  return (
    <>
      <div>
        <h2>{bigTitle}</h2>

        <div className="menus-container">
          {meals.map((meal) => {
            return (
              <Menu
                key={meal.id}
                meal={meal}
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
      </div>
    </>
  );
};

export default Categoty;
