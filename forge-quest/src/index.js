import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Landing from './pages/Landing';
import Pricings from './pages/Pricings';
import Silver from './pages/Silver';
import Gold from './pages/Gold';
import Diamond from './pages/Diamond';
import Bedrock from './pages/Bedrock';
import Contacts from './pages/Contacts';
import Support from './pages/Support';
import FAQ from './pages/FAQ';
import Rules from './pages/Rules';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Description from './pages/Description';

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricings" element={<Pricings />} />
        <Route path="/pricings/silver" element={<Silver />} />
        <Route path="/pricings/gold" element={<Gold />} />
        <Route path="/pricings/diamond" element={<Diamond />} />
        <Route path="/pricings/bedrock" element={<Bedrock />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </Router>,
    document.getElementById('root')
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
