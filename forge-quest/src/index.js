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
import Store from './pages/Store';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Mail from './pages/Mail';


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
        <Route path="/store" element={<Store />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/mail" element={<Mail />} />
      </Routes>
    </Router>,
    document.getElementById('root')
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
