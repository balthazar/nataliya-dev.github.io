import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './css/index.css';

import Home from './pages/home';
import About from './pages/about'
import Research from './pages/research'
import Outreach from './pages/outreach'
import Blog from './pages/blog'

import Header from './components/header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Header />

    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="research" element={<Research />} />
        <Route path="outreach" element={<Outreach />} />
        <Route path="blog" element={<Blog />} />
      </Routes>

    </div>

  </BrowserRouter >
);
