import '../Styles/Shop.css'
import { useEffect, useState } from 'react'

 const Shop = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
                console.log(products);
            } catch (error) {
                console.error('Error fetching products: ', error);
            }
        }

        fetchProducts();
    
    }, [])

    return (
        <>
            {/* <h1>Shop</h1> */}
            <div className="productsContainer">
                {products ? (
                    products.map((product) => (
                    <div className='product' key={product.id}> 
                        <h5>{product.title}</h5>
                        <img className='productImg' src={product.image} alt={product.title} />
                        <h4>${product.price}</h4>
                        <button className='addButton' type="button">Add to Cart</button>
                    </div>
                    ))
                ) : (
                    <h3> Sorry no inventory </h3>
                )}
            </div>
        </>
    )
}

export default Shop;