import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Next from './next.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/next" element={<Next/>}/>
        </Routes>
    </Router>
</StrictMode>
);