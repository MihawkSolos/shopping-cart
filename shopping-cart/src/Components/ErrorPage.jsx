import { Link, Outlet } from 'react-router-dom';
import '../Styles/ErrorPage.css'

const ErrorPage = () => {

    return (
        <>
            <h1>Uh oh! Error Ocurred</h1>
            <Link to='/'>
                Click here to go back to home page.
            </Link>
            <Outlet />
        </>
    )
}

export default ErrorPage;