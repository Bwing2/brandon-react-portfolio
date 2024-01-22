import PortfolioCard from '../components/portfolio/portfolioCard';
import { portfolioData } from '../components/portfolio/portfolioData';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      {portfolioData.map((project, index) => (
        <PortfolioCard key={index} project={project} />
      ))}
    </div>
  );
}
