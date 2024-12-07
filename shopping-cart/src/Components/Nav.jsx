import {Link,Outlet} from 'react-router-dom'
import { useState } from 'react'
import '../Styles/Nav.css'
import cartImg from '../images/cart.svg'

const Nav = () => {

    const [cartCounter, setCartCounter] = useState(0);
    const [cartState, setCartState] = useState({}); // Tracks clicked status and quantity for each product


    const addToCart = () => {
        setCartCounter((prev) => prev + 1);
    }

    return (
        <>
            <div className='navContainer'>
                <h1 className="title">Welcome to Aether</h1>
                <div className='linksContainer'>
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/shop" className='link'>Shop</Link>
                    <div className="cartContainer">
                       <Link to="/cart" className='link'>Cart</Link> 
                       <img className='cartImg' src={cartImg} alt="Cart" />
                       <div className='cartCounter'>{cartCounter}</div>
                    </div>
                </div>
            </div>
            <div className="content">
                <Outlet context={{addToCart, setCartCounter, cartState, setCartState}}/>
            </div>
        </>
    )
}

export default Nav;