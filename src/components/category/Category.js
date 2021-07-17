import "./Category.css";
import Menu from "../menu/Menu";

const Categoty = (props) => {
  const { bigTitle, meals } = props;
  return (
    <>
      <div className="page-container">
        <h2>{bigTitle}</h2>

        <div className="menus-container">
          {meals.map((meal) => {
            return <Menu meal={meal} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Categoty;
