import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../src/components/UI/ScrollToTop/ScrollToTop';

// https://coolors.co/25283d-c0d6df-dbe9ee-ffa69e-aa4465

const app = (
    <BrowserRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
