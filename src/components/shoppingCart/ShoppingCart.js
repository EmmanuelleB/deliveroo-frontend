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

  let subResult = 0;
  for (let i = 0; i < products.length; i++) {
    subResult += Number(products[i].price) * products[i].quantity;
  }

  const delivery = 2.5;

  const result = subResult + delivery;

  return (
    <div>
      {products.length > 0 ? (
        <div className="shopping-basket">
          <button className="submit-on">Valider mon panier</button>
          <div className="part-1">
            {products.map((product, index) => {
              return (
                <div key={index} className="line-product">
                  <div className="counter-container">
                    <button
                      className="btn-less"
                      onClick={() => {
                        handleLess(index);
                      }}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="btn-more"
                      onClick={() => {
                        handleMore(index);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="product-description">
                    <span className="products-name">{product.title}</span>
                    <span className="products-price">{product.price} €</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="part-2">
            <p>Sous-Total : {subResult.toFixed(2)} €</p>
            <p>Frais de livraison : {delivery.toFixed(2)} €</p>
          </div>
          <div className="part-3">
            <h3>Total : {result.toFixed(2)} €</h3>
          </div>
        </div>
      ) : (
        <div className="no-shopping-basket">
          <button className="submit-off">Valider mon panier</button>

          <p>Votre panier est vide</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
