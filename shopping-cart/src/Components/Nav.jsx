import {Link,Outlet} from 'react-router-dom'
import '../Styles/Nav.css'

const Nav = () => {

    return (
        <>
            <div className='navContainer'>
                <h1 className="title">Welcome to Aether</h1>
                <div className='linksContainer'>
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/shop" className='link'>Shop</Link>
                    <Link to="/cart" className='link'>Cart</Link>
                </div>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </>
    )
}

export default Nav;