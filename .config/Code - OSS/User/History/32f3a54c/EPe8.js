import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Header from './elements/page/Header';
import Footer from './elements/page/Footer';

import ErrorPage from './pages/ErrorPage';

import Home from './pages/Home';
import Academia from './pages/Academia';
import Employment from './pages/Employment';
import Library from './pages/Library';

import InstantGram from './pages/blog/InstantGram';
import Sport from './pages/blog/Sport';
import Allroad from './pages/blog/Allroad';
import BrittonsFoodRC from './pages/blog/BrittonsFoodRC';
import FoundingFathers from './pages/blog/FoundingFathers';
import Media from './pages/blog/Media';
import MiamiVice from './pages/blog/MiamiVice';
import Ricing from './pages/blog/Ricing';
import ThinkFlow from './pages/blog/ThinkFlow';
import GentlemenWhoCafe from './pages/blog/GentlemenWhoCafe';
import GraphicDesign from './pages/blog/GraphicDesign';

import Weather from './pages/utils/Weather';
import Conquest from './pages/utils/Conquest';

const root = ReactDOM.createRoot(
  document.getElementById('root')
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
          <Route path="graphic-design" element={<GraphicDesign />} />
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
