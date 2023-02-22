import Education from "./Education/Education";
import './Resume.css'
import Topics from "./Topics/Topics";

function Resume() {
    return (
        <div className="row">
            <div className="col-sm-2 remove-padding">
                <Topics/>
            </div>
            <div className="col-sm-10 remove-padding B">
                <h2>Resume</h2>
                <Education />
            </div>
        </div>
    )
}

export default Resume