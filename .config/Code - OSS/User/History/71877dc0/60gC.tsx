import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Header from './atoms/Header';
import Footer from './atoms/Footer';

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Conquest from './pages/Conquest';
import InstantGram from './pages/blog/InstantGram';
import Sport from './pages/blog/Sport';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/conquest" element={<Conquest />} />
        <Route path="/blog">
          <Route path="instant-gram" element={<InstantGram />} />
          <Route path="sport" element={<Sport />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
