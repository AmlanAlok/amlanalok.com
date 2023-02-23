import Assitantships from "./Assitantships/Assitantships";
import Certifications from "./Certifications/Certifications";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import './Resume.css'
import Skills from "./Skiils/Skils";
import Topics from "./Topics/Topics";
import WorkExperience from "./WorkExperience/WorkExperience";

function Resume() {
    return (
        <div className="row">
            <div className="col-sm-2 remove-padding">
                <Topics/>
            </div>
            <div className="col-sm-10 remove-padding">
                <h1 className='center-pos'>Resume</h1>
                <Education />
                <Skills />
                <WorkExperience />
                <Assitantships />
                <Certifications />
                <Projects />
            </div>
        </div>
    )
}

export default Resume