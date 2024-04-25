import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Landing from './pages/Landing';
import Pricings from './pages/Pricings';

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricings" element={<Pricings />} />
      </Routes>
    </Router>,
    document.getElementById('root')
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
