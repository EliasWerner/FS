import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/app'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.hydrate(<Router><App /></Router>, document.getElementById('root'));