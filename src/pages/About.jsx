import Carousel from "react-bootstrap/Carousel";

import profilePic from "../images/brandon_profile_pic.png";
import taiwanPic from "../images/taiwan_vacation.jpg";
import graduationPic from "../images/graduation.jpg";

export default function About() {
  return (
    <div className="info-container">
      <h1>About Me</h1>
      <div className="info-div">
        <div className="paragraph-div">
          <p className="about-paragraph">
            <span>
              Hello my name is Brandon Wing, an aspiring full stack software
              engineer with a background in business management and quality
              assurance software testing. I am on a journey to transition my
              skills from the world of business to the dynamic field of software
              engineering. Merging my love for creativity with the limitless
              possibilities of coding, I approach challenges with a strategic
              mindset. This ensures that every solution is not only functional
              but also reflects myself.
            </span>
          </p>

          <p className="about-paragraph">
            <span>
              With a strong foundation in business administration, I bring to
              the table organizational skills honed through managing CRM
              databases, planning events, and crafting content for clients. My
              experience in quality assurance software testing has also
              instilled in me an appreciation for details. I am excited to apply
              my diverse skill set, contribute to dynamic development teams, and
              take on ambitious projects in a growth-oriented environment.
            </span>
          </p>
        </div>

        <div className="img-div">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={profilePic}
                alt="profile picture"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={taiwanPic}
                alt="taiwan picture with my sister"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={graduationPic}
                alt="graduation picture"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
