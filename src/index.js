import React from 'react';
import ReactDOM from 'react-dom';
import QuoteDashboard from './App';
import registerServiceWorker from './registerServiceWorker';
import './app.css';

ReactDOM.render(<QuoteDashboard className="wrapper"/>, document.getElementById('root'));
registerServiceWorker();
