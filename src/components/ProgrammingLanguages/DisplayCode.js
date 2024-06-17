import React, { useEffect, useState } from 'react';

function DisplayCode(props) {

    const apiUrl = process.env.REACT_APP_API_URL;
    const [pythonCode, setPythonCode] = useState('');
    const [javaCode, setJavaCode] = useState('');
    const [javascriptCode, setJavascriptCode] = useState('');

    useEffect(() => {
        fetch(apiUrl + '/Code/1-HelloWorld/' + props.pythonFileName)
          .then(response => response.text())
          .then(data => setPythonCode(data))
          .catch(error => console.error('Error fetching Python file:', error));
      }, [apiUrl, props.pythonFileName]);

    useEffect(() => {
        fetch(apiUrl + '/Code/1-HelloWorld/' + props.javaFileName)
        .then(response => response.text())
        .then(data => setJavaCode(data))
        .catch(error => console.error('Error fetching Python file:', error));
    }, [apiUrl, props.javaFileName]);

    useEffect(() => {
        fetch(apiUrl + '/Code/1-HelloWorld/' + props.javascriptFileName)
          .then(response => response.text())
          .then(data => setJavascriptCode(data))
          .catch(error => console.error('Error fetching Python file:', error));
      }, [apiUrl, props.javascriptFileName]);

    return (
        <div>
            <h3>{props.title}</h3>

            <div className="row">
                <div className="col-md-4">
                    <p>Python</p>
                    <div className="code-container">
                        <pre>
                            <code className="language-python">
                                {pythonCode}
                            </code>
                        </pre>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <p>Java</p>
                    <div className="code-container">
                        <pre>
                            <code className="language-java">
                                {javaCode}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="col-md-4">
                    <p>JavaScript</p>
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