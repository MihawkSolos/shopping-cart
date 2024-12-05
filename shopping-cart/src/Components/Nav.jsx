import {Outlet} from 'react-router-dom'
import '../Styles/Nav.css'

const Nav = () => {

    return (
        <>
            <head>
                <h1 className="title">Welcome to Aether</h1>

                <Outlet />
            </head>
        </>
    )
}

export default Nav;