import resume1 from "../images/updated_resume1.jpg";
import resume2 from "../images/updated_resume2.jpg";

export default function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <a
        href="https://drive.google.com/file/d/1GqCki3tQ4NzJ0YpdtWAxxf8BRcbjw-al/view?usp=sharing"
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
