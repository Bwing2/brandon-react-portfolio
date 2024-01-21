function Footer() {
  const links = [
    {
      href: 'https://github.com/Bwing2',
      imgSrc: '/github.svg',
      imgAlt: 'github svg logo',
      text: 'Github',
    },
    {
      href: 'https://www.linkedin.com/in/brandonwing/',
      imgSrc: '/linkedIn.svg',
      imgAlt: 'linkedin svg logo',
      text: 'LinkedIn',
    },
    {
      href: '/projects',
      imgSrc: '/email.svg',
      imgAlt: 'email svg icon',
      text: 'Email',
    },
  ];

  return (
    <div className="container-fluid footer-container">
      <footer className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          {links.map((link, index) => (
            <li key={index} className="nav-link">
              <a href={link.href} className="text-decoration-none footer-link">
                <img src={link.imgSrc} alt={link.imgAlt} />
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
