import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from '../src/app'
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.css';

Loadable.preloadReady().then(() => {
ReactDOM.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)});