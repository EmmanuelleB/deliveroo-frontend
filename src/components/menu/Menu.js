import "./Menu.css";

const Menu = (props) => {
  const { meal, products, setProducts } = props;

  const handleAddProduct = () => {
    const newProducts = [...products];
    let isAlreadyHere = false;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === meal.id) {
        //produit existe deja > incrementer la quantité
        newProducts[i].quantity++;
        isAlreadyHere = true;
        break;
      }
    }
    if (!isAlreadyHere) {
      newProducts.push({ id: meal.id, title: meal.title, price: meal.price, quantity: 1 });
    }
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
