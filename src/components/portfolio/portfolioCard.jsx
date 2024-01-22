export default function PortfolioCard({ project }) {
  return (
    <div className="project-container">
      <div className="project-div">
        <div className="l-project-div">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className="custom-badges-div">
            {project.languages.map((language, index) => (
              <span key={index} className="language-badge">
                {language}
              </span>
            ))}
            <div className="links-div">
              <a href={project.hrefDeployed}>Deployed App</a>
              <a href={project.hrefGithub}>GitHub Repo</a>
            </div>
          </div>
        </div>
        <div className="r-project-div">
          <img
            className="project-img"
            src={project.imgSrc}
            alt={project.name}
          />
        </div>
      </div>
    </div>
  );
}
