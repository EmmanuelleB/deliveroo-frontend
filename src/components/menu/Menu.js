import "./Menu.css";

const Menu = (props) => {
  const { meal, data, card, setCard } = props;

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
    const newCard = [...card, item];
    setCard(newCard);
  };

  return (
    <div className="menu-container" key={meal.id} onClick={() => handleAddCard(meal.id)}>
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
