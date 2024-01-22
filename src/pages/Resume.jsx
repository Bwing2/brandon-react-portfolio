import resume from '../images/resume.png';

export default function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <a
        href="https://drive.google.com/file/d/1Ifvqx7Llv6bZdUzZ-7GrFZAN0ljhKpro/view?usp=sharing"
        className="btn custom-button-color resume-download"
      >
        Link to Download
      </a>
      <div className="resume-div">
        <img src={resume} alt="Resume Image" className="resume-img"></img>
      </div>
    </div>
  );
}
