import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Header from './atoms/Header';
import Footer from './atoms/Footer';

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import InstantGram from './pages/blog/InstantGram';
import Sport from './pages/blog/Sport';
import Academia from './pages/Academia';
import Allroad from './pages/blog/Allroad';
import BrittonsFoodRC from './pages/blog/BrittonsFoodRC';
import FoundingFathers from './pages/blog/FoundingFathers';
import Media from './pages/blog/Media';
import MiamiVice from './pages/blog/MiamiVice';
import Ricing from './pages/blog/Ricing';
import ThinkFlow from './pages/blog/ThinkFlow';
import Employment from './pages/Employment';
import Library from './pages/Library';
import Weather from './utils/pages/Weather';
import Conquest from './utils/pages/Conquest';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academia" element={<Academia />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/library" element={<Library />} />
        <Route path="/blog">
          <Route path="instant-gram" element={<InstantGram />} />
          <Route path="sport" element={<Sport />} />
          <Route path="brittons-foodrc" element={<BrittonsFoodRC />} />
          <Route path="allroad" element={<Allroad />} />
          <Route path="gentlemen-who-cafe" element={<GentlemenWhoCafe />} />
          <Route path="ricing" element={<Ricing />} />
          <Route path="think-flow" element={<ThinkFlow />} />
          <Route path="founding-fathers" element={<FoundingFathers />} />
          <Route path="media" element={<Media />} />
          <Route path="miami-vice" element={<MiamiVice />} />
          <Route path="graphic-design" element={<GrapicDesign />} />
        </Route>
        <Route path="/utils">
          <Route path="weather" element={<Weather />} />
          <Route path="conquest" element={<Conquest />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
