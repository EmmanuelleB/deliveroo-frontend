import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  const { products } = props;

  return (
    <div className="shoppingCart-container">
      {products.length > 0 ? (
        <div>
          <button className="submit-on">Valider mon panier</button>
          <>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <button>-</button>
                  <span>{product.title}</span> - <span>{product.price}</span>
                  <button>+</button>
                </div>
              );
            })}
          </>
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
