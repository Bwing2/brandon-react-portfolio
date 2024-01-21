import profilePic from '../images/brandon_profile_pic.png';

export default function About() {
  return (
    <div className="info-container">
      <h1>About Me</h1>
      <div className="info-div">
        <div className="paragraph-div">
          <p className="about-paragraph">
            Hello my name is Brandon Wing, an aspiring full stack software
            engineer with a background in business management and quality
            assurance software testing. I am on a journey to transition my
            skills from the world of business to the dynamic field of software
            engineering. Merging my love for creativity with the limitless
            possibilities of coding, I approach challenges with a strategic
            mindset. This ensures that every solution is not only functional but
            also reflects myself.
          </p>

          <p className="about-paragraph">
            With a strong foundation in business administration, I bring to the
            table organizational skills honed through managing CRM databases,
            planning events, and crafting content for clients. My experience in
            quality assurance software testing has also instilled in me an
            appreciation for details. I am excited to apply my diverse skill
            set, contribute to dynamic development teams, and take on ambitious
            projects in a growth-oriented environment.
          </p>
        </div>

        <div className="img-div">
          <img
            src={profilePic}
            alt="brandon profile picture"
            className="profile-pic"
          ></img>
        </div>
      </div>
    </div>
  );
}
