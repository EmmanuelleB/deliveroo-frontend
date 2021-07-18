import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  const { cart, quantity, setQuantity, price } = props;

  const handleMore = (index) => {
    const newQuantity = [...quantity];
    console.log(index);
    newQuantity[index]++;
    setQuantity(newQuantity);
  };
  const handleLess = (index) => {
    const newQuantity = [...quantity];
    console.log(index);
    newQuantity[index]--;
    setQuantity(newQuantity);
  };

  const reducer = (a, b) => a + b;

  const sousResult = price.reduce(reducer);

  const handleResult = (nbr) => {
    let newResult = 0;
    newResult += nbr + 2.5;
    return newResult;
  };

  return (
    <div className="shoppingCart-container">
      {cart.length > 0 ? (
        <div>
          <button className="submit-on">Valider mon panier</button>
          <div>
            {cart.map((item, index) => {
              return (
                <div className="menu-shoppingCart-container" key={index}>
                  <button className="btn-less" onClick={() => handleLess(index)}>
                    -
                  </button>
                  <p>{quantity[index]}</p>
                  <button className="btn-more" onClick={() => handleMore(index)}>
                    +
                  </button>
                  <p className="text-shoppinCart" key={item.id}>
                    <span>{item.title}</span> <span className="price">{item.price} €</span>
                  </p>
                </div>
              );
            })}

            <p>Sous-total : {sousResult} €</p>
            <p>Frais de livraison : 2,50 €</p>
            <h3>Total :{handleResult(sousResult)} €</h3>
          </div>
        </div>
      ) : (
        <div>
          <button className="submit">Valider mon panier</button>
          <div>
            <p className="panier">Votre panier est vide</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
