import resume1 from "../images/updated_resume1.png";
import resume2 from "../images/updated_resume2.png";

export default function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <a
        href="https://drive.google.com/file/d/1XzM6frkWGmWvREg7dCH1rdBRsF9zRSaO/view?usp=sharing"
        className="btn custom-button-color resume-download"
      >
        Link to Download
      </a>
      <div className="resume-div">
        <img src={resume1} alt="Resume Image 1" className="resume-img"></img>
        <img src={resume2} alt="Resume Image 2" className="resume-img"></img>
      </div>
    </div>
  );
}
