import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Store from './models/app';
import reportWebVitals from './reportWebVitals';

const store = new Store(10, 10);
ReactDOM.render(
  <React.StrictMode>
    <App grid={store.grid} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Allowing console only here for the purpose of logging vitals
// eslint-disable-next-line no-console
reportWebVitals(console.log);
