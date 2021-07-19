import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  const { products, setProducts } = props;

  const handleLess = (index) => {
    const newProducts = [...products];
    if (newProducts[index].quantity === 1) {
      newProducts.splice(index, 1);
    } else {
      newProducts[index].quantity--;
    }
    setProducts(newProducts);
  };

  const handleMore = (index) => {
    const newProducts = [...products];
    newProducts[index].quantity++;
    setProducts(newProducts);
  };

  return (
    <div className="shoppingCart-container">
      {products.length > 0 ? (
        <div>
          <button className="submit-on">Valider mon panier</button>
          <>
            {products.map((product, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => {
                      handleLess(index);
                    }}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => {
                      handleMore(index);
                    }}
                  >
                    +
                  </button>
                  <span>{product.title}</span> - <span>{product.price}</span>
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
