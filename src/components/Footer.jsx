function Footer() {
  return (
    <div className="container-fluid footer-container">
      <footer className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-link">
            <a
              href="https://github.com/Bwing2"
              className="text-decoration-none footer-link"
            >
              <img src="/github.svg" alt="github svg logo" />
              Github
            </a>
          </li>
          <li className="nav-link">
            <a
              href="https://www.linkedin.com/in/brandonwing/"
              className="text-decoration-none footer-link"
            >
              <img src="/linkedIn.svg" alt="linkedin svg logo" />
              LinkedIn
            </a>
          </li>
          <li className="nav-link">
            <a href="/projects" className="text-decoration-none footer-link">
              <img src="/email.svg" alt="email svg icon" />
              Email
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
