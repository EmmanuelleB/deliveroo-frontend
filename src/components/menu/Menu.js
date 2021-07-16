import "./Menu.css";

const Menu = (props) => {
    const{ bigTitle, meals} = props;
  return(
      <>
      <div className="page-container">
        <h2>{bigTitle}</h2>

        <div className="menus-container">
            {meals.map((meal)=>{
                return(
                    <div className="menu-container" key={meal.id}>
                    <div className="col1">
                        <h3>{meal.title}</h3>
                        <p>{meal.description}</p>
                        <span className="price">{meal.price} €</span>
                        {meal.popular && <span className="popular">Populaire</span>} 
                        
                    </div>
                    <div className="col2">
                        {meal.picture && <img src={meal.picture} alt="menu" /> }
                    </div>
                  </div>
                )

            })}
        </div>
        </div>
          
      </>
  );
}

export default Menu;