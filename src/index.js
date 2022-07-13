import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './css/index.css';
import App from './App';
import About from './components/about'
import Research from './components/research'
import Outreach from './components/outreach'
import Blog from './components/blog'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="research" element={<Research />} />
      <Route path="outreach" element={<Outreach />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  </BrowserRouter >
);
