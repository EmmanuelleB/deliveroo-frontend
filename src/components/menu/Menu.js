import "./Menu.css";

const Menu = (props) => {
    const{ bigTitle, meals} = props;
  return(
      <>
          <h1>{bigTitle}</h1>

        <div className="menus-container">
            {meals.map((meal)=>{
                return(
                    <div className="menu-container" key={meal.id}>
                    <div className="col1">
                        <h2>{meal.title}</h2>
                        <p>{meal.description}</p>
                        <h3>{meal.price} €</h3>
                    </div>
                    <div className="col2">
                        {meal.picture && <img src={meal.picture} alt="menu" /> }
                    </div>
                  </div>
                )

            })}
        </div>
          
      </>
  );
}

export default Menu;