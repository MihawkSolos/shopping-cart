import { useOutletContext } from 'react-router-dom';
import '../Styles/Shop.css';
import { useEffect, useState } from 'react';

const Shop = () => {
  const { addToCart } = useOutletContext();
  const {cartState, setCartState} = useOutletContext();
  const [products, setProducts] = useState(null);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, []);
  

  const handleAddToCart = (productId, product) => {
    setCartState((prevState) => {
        if (prevState[productId]) {
            // Product already in the cart, no need to add again
            return prevState;
        }

        // Add the product to the cart with initial quantity 1
        return {
            ...prevState,
            [productId]: {
                isClicked: true,
                numOfProduct: 1,
                productInfo: product, // Save product details for reference
            },
        };
    });

    addToCart(); // Update global cart counter
};


  const incrementQuantity = (productId) => {
    setCartState((prevState) => ({
      ...prevState,
      [productId]: {
        ...prevState[productId],
        numOfProduct: prevState[productId].numOfProduct + 1,
      },
    }));
  };

  const decrementQuantity = (productId) => {
    setCartState((prevState) => {
      const currentQuantity = prevState[productId].numOfProduct;
    //   if (currentQuantity <= 1) {
    //     const { [productId]: _, ...rest } = prevState;
    //     return rest;
    //   }
      return {
        ...prevState,
        [productId]: {
          ...prevState[productId],
          numOfProduct: currentQuantity - 1,
        },
      };
    });
  };

  return (
    <div className="productsContainer">
      {products ? (
        products.map((product) => (
          <div className="product" key={product.id}>
            <h5>{product.title}</h5>
            <img className="productImg" src={product.image} alt={product.title} />
            <h4>${product.price}</h4>
            {cartState[product.id]?.isClicked ? (
              <div className='quantityContainer'>
                <button
                  className="decrementBtn"
                  onClick={() => decrementQuantity(product.id)}
                  disabled={!cartState[product.id] || cartState[product.id]?.numOfProduct < 1}
                >
                  -
                </button>
                <p>{cartState[product.id].numOfProduct}</p>
                <button
                  className="incrementBtn"
                  onClick={() => incrementQuantity(product.id)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleAddToCart(product.id, product)}
                className="addButton"
                type="button"
              >
                Add to Cart
              </button>
            )}
          </div>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Shop;
