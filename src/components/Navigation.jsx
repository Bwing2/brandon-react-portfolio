import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    {/* Used to get path of current url */}
    const currentPage = useLocation().pathname;

    return (
        <ul>
            <li>
                <Link to='/'>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/about'>
                    About
                </Link>
            </li>
            <li>
                <Link to='/projects'>
                    Projects
                </Link>
            </li>
            <li>
                <Link to='/resume'>
                    Resume
                </Link>
            </li>
            <li>
                <Link to='/contact'>
                    Contact
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;