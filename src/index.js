import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/fonts.css';
import './assets/css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
