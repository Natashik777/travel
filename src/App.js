import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Reviews from './pages/Reviews';
import AuthLayout from './layouts/AuthLayout';
import ConcertsHome from './pages/ConcertsHome';
import Card from './pages/Card';
import Result from './pages/Result';
import Admin from './pages/Admin'
import CreateArticles from './pages/CreateArticles';



export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="result" element={<Result />} />
      <Route path="reviews" element={<Reviews />} />
      <Route index element={<ConcertsHome />} />

      <Route index element={<Admin/>} />
        <Route path="CreateArticles" element={<CreateArticles />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="concerts">
        
        <Route path=":card" element={<Card />} />
        
      </Route>
    </Routes>
  );
}