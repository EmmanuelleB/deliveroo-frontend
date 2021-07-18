import "./Menu.css";

const Menu = (props) => {
  const { meal, data, cart, setCart, quantity, setQuantity, price, setPrice } = props;

  const handleAddCard = (idItem) => {
    let item = null;
    data.categories.forEach((category) =>
      category.meals.forEach((meal) => {
        if (meal.id === idItem) {
          item = meal;
        }
      })
    );
    console.log(item);
    console.log(item.price);
    const newCart = [...cart, item];
    setCart(newCart);

    const newQuantity = [...quantity, 1];
    setQuantity(newQuantity);

    const newPrice = [...price, Number(item.price)];
    setPrice(newPrice);
    console.log(price);
  };

  return (
    <div className="menu-container" onClick={() => handleAddCard(meal.id)}>
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
