import project0 from '../../images/sat_seeker.png';
import project1 from '../../images/dota_api_website.png';
import project2 from '../../images/mvc_blog_homepage.png';
import project3 from '../../images/rocket_launch_info.png';
import project4 from '../../images/get_route_nosql.png';
import project5 from '../../images/weather_app.png';

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
    name: 'Dota Longest and Shortest Game Stats',
    description:
      "A web page that uses the OpenDota API to check a steam user's ID for their longest and shortest game stats.",
    hrefGithub: 'https://github.com/Bwing2/brandon-dota-api-website',
    hrefDeployed: 'https://bwing2.github.io/brandon-dota-api-website/',
    languages: ['HTML', 'CSS', 'Javascript', 'Server-Side API'],
    imgSrc: project1,
    imgAlt: 'Dota Longest and Shortest Game Stats Search Page',
  },
  {
    name: 'Cool Ideas Blog',
    description:
      'A blog application using the Model View Controller (MVC) paradigm to create and organize a blog site.',
    hrefGithub: 'https://github.com/Bwing2/brandon-mvc-tech-blog',
    hrefDeployed: 'https://brandon-mvc-tech-blog-cc4f8f869b6d.herokuapp.com/',
    languages: ['Javascript', 'CSS', 'Node.js', 'Express.js'],
    imgSrc: project2,
    imgAlt: 'Cool Ideas Blog Home Page',
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
    imgSrc: project3,
    imgAlt: 'Rocket Launches and News Database Search Page',
  },
  {
    name: 'NoSQL Social Network API',
    description:
      'A backend application that uses NoSQL to build the database for a social network API. (Video demonstration included below.)',
    hrefGithub: 'https://github.com/Bwing2/brandon-social-network-api',
    hrefDeployed: 'https://www.youtube.com/watch?v=1LeIPhDVkdw',
    languages: ['Javascript', 'Node.js', 'Express.js ,', 'Mongoose', 'MongoDB'],
    imgSrc: project4,
    imgAlt: 'Insomnia GET Route for NoSQL Social Network Api',
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
    imgSrc: project5,
    imgAlt: 'Weather Dashboard Search Page',
  },
];
