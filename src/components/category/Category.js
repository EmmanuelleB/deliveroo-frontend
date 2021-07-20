import "./Category.css";
import Menu from "../menu/Menu";

const Categoty = (props) => {
  const { name, meals, products, setProducts } = props;

  return (
    <>
      <h2>{name}</h2>

      <div className="menus-container">
        {meals.map((meal) => {
          return <Menu key={meal.id} meal={meal} products={products} setProducts={setProducts} />;
        })}
      </div>
    </>
  );
};

export default Categoty;
