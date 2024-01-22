import project0 from '../../images/sat_seeker.png';
import project1 from '../../images/rocket_launch_info.png';
import project2 from '../../images/weather_app.png';

export const portfolioData = [
  {
    name: 'Satellite Seeker',
    description:
      'A web app that can track current satellite location data using a noradID. Also incorporates login functionality.',
    hrefGithub: 'https://github.com/chilejay7/Satellite-Seeker',
    hrefDeployed: 'https://satellite-seeker-6eb766f2c5fc.herokuapp.com/',
    languages: ['Javascript', 'MySQL', 'Node.js', 'Express.js', 'Handlebars'],
    imgSrc: project0,
    imgAlt: 'Satellite Seeker Search Page',
  },
  {
    name: 'Rocket Launches and News Database',
    description:
      'A web app that will allow you to search current, past, or upcoming launches. Also includes up-to-date space news. ',
    hrefGithub:
      'https://github.com/SparkKids/rocket-launches-and-news-database-group-project',
    hrefDeployed:
      'https://sparkkids.github.io/rocket-launches-and-news-database-group-project/',
    languages: ['HTML', 'CSS', 'Tailwind', 'Javascript'],
    imgSrc: project1,
    imgAlt: 'Rocket Launches and News Database Search Page',
  },
  {
    name: 'Weather Dashboard',
    description:
      'A web page that uses a third party API to check the weather at a desired location for the next 5 days.',
    hrefGithub:
      'https://github.com/Bwing2/brandon-weather-dashboard-challenge-6',
    hrefDeployed:
      'https://bwing2.github.io/brandon-weather-dashboard-challenge-6/',
    languages: ['HTML', 'CSS', 'Javascript', 'Server-Side API'],
    imgSrc: project2,
    imgAlt: 'Rocket Launches and News Database Search Page',
  },
];
