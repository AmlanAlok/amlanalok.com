import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import DisplayCode from "./DisplayCode"

function ProgrammingLanguages() {

    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        const fetchCSV = async () => {
            const response = await fetch('/code_files.csv');
            const reader = response.body.getReader();
            const result = await reader.read(); // raw array
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result.value); // the csv text
            const results = Papa.parse(csv, { header: false });
            setDataArray(results.data);
        };

        fetchCSV();
    }, []);

    return (
        <div>
            <h1>Python vs Java vs Javascript</h1>

            {dataArray.map((row, rowIndex) => (
                <DisplayCode key={rowIndex} title={row[0]} pythonFileName={row[1]} javaFileName={row[2]} javascriptFileName={row[3]} />
            ))}
        </div>
    )
}

export default ProgrammingLanguages