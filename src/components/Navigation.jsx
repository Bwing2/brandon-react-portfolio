import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  {
    /* Used to get path of current url */
  }
  const currentPage = useLocation().pathname;

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Projects">Projects</Link>
      </li>
      <li>
        <Link to="/Resume">Resume</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Navigation;
