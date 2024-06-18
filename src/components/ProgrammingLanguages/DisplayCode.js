import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';

// import './prism-gruvbox-dark.css';
// import './prism-darcula.css';
// import 'prismjs/themes/prism.css';   
// Import the language you need, here it's Python, Java and JavaScript
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
// import './prism-material-dark.css';
// https://github.com/PrismJS/prism-themes/tree/master/themes

function DisplayCode(props) {

    const apiUrl = 'https://raw.githubusercontent.com/AmlanAlok/Programming-Languages/main/4-Website/'
    const [pythonCode, setPythonCode] = useState('');
    const [javaCode, setJavaCode] = useState('');
    const [javascriptCode, setJavascriptCode] = useState('');

    useEffect(() => {
        fetch(apiUrl + props.pythonFileName)
            .then(response => response.text())
            .then(data => setPythonCode(data))
            .catch(error => console.error('Error fetching Python file:', error));
    }, [apiUrl, props.pythonFileName]);

    useEffect(() => {
        fetch(apiUrl + props.javaFileName)
            .then(response => response.text())
            .then(data => setJavaCode(data))
            .catch(error => console.error('Error fetching Python file:', error));
    }, [apiUrl, props.javaFileName]);

    useEffect(() => {
        fetch(apiUrl + props.javascriptFileName)
            .then(response => response.text())
            .then(data => setJavascriptCode(data))
            .catch(error => console.error('Error fetching Python file:', error));
    }, [apiUrl, props.javascriptFileName]);

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <h3>{props.title}</h3>

            <div className="row">
                <div className="col-md-4">
                    <p>Python</p>
                    <div>
                        <pre>
                            <code className="language-python">
                                {pythonCode}
                            </code>
                        </pre>
                    </div>

                </div>
                <div className="col-md-4">
                    <p>Java</p>
                    <div>
                        <pre>
                            <code className="language-java">
                                {javaCode}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="col-md-4">
                    <p>JavaScript</p>
                    <div>
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