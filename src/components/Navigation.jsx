import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const selectedPage = useLocation().pathname;

  const navArray = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About Me' },
    { path: '/projects', name: 'Projects' },
    { path: '/resume', name: 'Resume' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
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
  );
}

export default Navigation;
