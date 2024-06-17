import React, { useEffect, useState } from 'react';

function DisplayCode(props) {

    const [pythonCode, setPythonCode] = useState('');
    const [javaCode, setJavaCode] = useState('');
    const [javascriptCode, setJavascriptCode] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/Code/1-HelloWorld/' + props.pythonFileName)
          .then(response => response.text())
          .then(data => setPythonCode(data))
          .catch(error => console.error('Error fetching Python file:', error));
      }, [props.pythonFileName]);

    useEffect(() => {
        fetch('http://localhost:3000/Code/1-HelloWorld/' + props.javaFileName)
        .then(response => response.text())
        .then(data => setJavaCode(data))
        .catch(error => console.error('Error fetching Python file:', error));
    }, [props.javaFileName]);

    useEffect(() => {
        fetch('http://localhost:3000/Code/1-HelloWorld/' + props.javascriptFileName)
          .then(response => response.text())
          .then(data => setJavascriptCode(data))
          .catch(error => console.error('Error fetching Python file:', error));
      }, [props.javascriptFileName]);

    return (
        <div>
            <h3>{props.title}</h3>

            <div className="row">
                <div className="col-md-4">
                    <div className="code-container">
                        <pre>
                            <code className="language-python">
                                {pythonCode}
                            </code>
                        </pre>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="code-container">
                        <pre>
                            <code className="language-java">
                                {javaCode}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="code-container">
                        <pre>
                            <code className="language-javascript">
                                {javascriptCode}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayCode