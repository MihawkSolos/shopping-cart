import './App.jsx'
import Home from './Home.jsx'
import Nav from './Nav.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'
import ErrorPage from './ErrorPage.jsx'


const routes = [
    {
        path: '/',
        element: <Nav />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home />},
            {path: 'shop', element: <Shop />},
            {path: 'cart', element: <Cart />},
        ]
    },
];

export default routes;