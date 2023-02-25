import Assitantships from "./Assitantships/Assitantships";
import Certifications from "./Certifications/Certifications";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import './Resume.css'
import Skills from "./Skills/Skills";
import WorkExperience from "./WorkExperience/WorkExperience";
import Sidebar from "./Sidebar/Sidebar";

function Resume() {
    return (
        <div className="row">
            <div className="D">
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