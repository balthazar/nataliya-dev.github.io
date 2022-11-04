import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Research from './pages/research'
import Involvement from './pages/involvement'
import Blog from './pages/blog'
import BlogPost from './pages/post'
import Header from './components/header'

import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Header />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="research" element={<Research />} />
        <Route path="involvement" element={<Involvement />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
  </BrowserRouter>,
)
