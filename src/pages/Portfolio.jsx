import PortfolioCard from '../components/portfolio';
import { portfolioData } from '../components/portfolio/portfolioData';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      {portfolioData.map((project, index) => (
        <PortfolioCard
          key={index}
          project={project}
          className={`project-${index}`}
        />
      ))}
    </div>
  );
}
