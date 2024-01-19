import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#0FC2C0' }}>
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-link">
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/about" className="text-decoration-none">
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/projects" className="text-decoration-none">
              Projects
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/resume" className="text-decoration-none">
              Resume
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/contact" className="text-decoration-none">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
