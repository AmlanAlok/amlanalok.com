import DisplayCode from "./DisplayCode"

function ProgrammingLanguages() {
    return (
        <div>
            <h1>Python vs Java vs Javascript</h1>

            <div className="row">
                <div className="col-md-4">
                    <p>Python</p>
                </div>
                <div className="col-md-4">
                    <p>Java</p>
                </div>
                <div className="col-md-4">
                    <p>JavaScript</p>
                </div>
            </div>

            <DisplayCode title = {'How to write Hello World?'} 
            pythonFileName = {'hello_world.py'} 
            javaFileName = {'HelloWorld.java'} 
            javascriptFileName = {'HelloWorld.js'}/>
        </div>
    )
}

export default ProgrammingLanguages