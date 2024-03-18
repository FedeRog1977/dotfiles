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
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/library" element={<Library />} />
        <Route path="/academia" element={<Academia />} />
        <Route path="/employment" element={<Employment />} /> */}
        <Route path="/blog">
          <Route path="instant-gram" element={<InstantGram />} />
          <Route path="sport" element={<Sport />} />
          {/* <Route path="brittons-foodrc" element={<BrittonsFoodRC />} />
          <Route path="allroad" element={<Allroad />} />
          <Route path="gentlemen-who-cafe" element={<GentlemenWhoCafe />} />
          <Route path="ricing" element={<Ricing />} />
          <Route path="think-flow" element={<ThinkFlow />} />
          <Route path="founding-fathers" element={<FoundingFathers />} />
          <Route path="media" element={<Media />} />
          <Route path="miami-vice" element={<MiamiVice />} />
          <Route path="graphic-design" element={<GrapicDesign />} /> */}
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


<li><Link to={"/blog/instant-gram"}>Instant Gram</Link></li>
<li><Link to={"/blog/sport"}>Sport</Link></li>
<li><Link to={"/blog/foodrc"}>BrittonsFoodRC</Link></li>
<li><Link to={"/blog/allroad"}>allroad</Link></li>
<li><Link to={"/blog/gentlemen-who-cafe"}>Gentlemen Who Caf&eacute;</Link></li>
<li>|</li>
<li><Link to={"/blog/ricing"}>Ricing</Link></li>
<li><Link to={"/blog/think-flow"}>ThinkFlow</Link></li>
<li><Link to={"/blog/founding-fathers"}>Founding Fathers</Link></li>
<li>|</li>
<li><Link to={"/blog/media"}>Media</Link></li>
<li><Link to={"/blog/miami-vice"}>Miami Vice</Link></li>
<li><Link to={"/blog/graphic-design"}>Graphic Design</Link></li>

reportWebVitals();
