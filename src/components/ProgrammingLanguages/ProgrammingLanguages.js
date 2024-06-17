import DisplayCode from "./DisplayCode"

function ProgrammingLanguages() {
    return (
        <div>
            <h1>Python vs Java vs Javascript</h1>

            <DisplayCode title = {'How to write Hello World?'} 
            pythonFileName = {'hello_world.py'} 
            javaFileName = {'HelloWorld.java'} 
            javascriptFileName = {'HelloWorld.js'}/>
        </div>
    )
}

export default ProgrammingLanguages