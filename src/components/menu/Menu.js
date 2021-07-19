import "./Menu.css";

const Menu = (props) => {
  const { meal, products, setProducts } = props;

  const handleAddProduct = () => {
    const newProducts = [...products, { id: meal.id, title: meal.title, price: meal.price }];
    setProducts(newProducts);
  };

  return (
    <div className="menu-container" onClick={handleAddProduct}>
      <div className="col1">
        <h3>{meal.title}</h3>
        <p>{meal.description}</p>
        <span className="price">{meal.price} €</span>
        {meal.popular && <span className="popular">Populaire</span>}
      </div>
      <div className="col2">{meal.picture && <img src={meal.picture} alt="menu" />}</div>
    </div>
  );
};

export default Menu;
