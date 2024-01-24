import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';

function Navigation() {
  const selectedPage = useLocation().pathname;

  const navArray = [
    { path: '/', name: 'About Me' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/resume', name: 'Resume' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <div className="nav-container">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className="nav nav-pills">
        {navArray.map((item) => (
          <li className="nav-item" key={item.path}>
            <Link
              to={item.path}
              className={
                selectedPage === item.path ? 'nav-link active' : 'nav-link'
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
