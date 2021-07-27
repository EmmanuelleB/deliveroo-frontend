import "./Presentation.css";

const Presentation = (props) => {
  const { data } = props;
  return (
    <div className="presentation-container">
      <div className="page-container">
        <div className="col1">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <img src={data.restaurant.picture} alt="restaurant" />
      </div>
    </div>
  );
};

export default Presentation;
