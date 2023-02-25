import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   // not normal JS code
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="bg-img">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);  // not normal JS code

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
