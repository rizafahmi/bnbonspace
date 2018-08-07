import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
