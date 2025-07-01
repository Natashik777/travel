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
import Admin from './pages/Admin';
import CreateArticles from './pages/CreateArticles';

export default function App() {
  return (
    <Routes>
      {/* Главная страница */}
      <Route path="/" element={<Home />} />

      {/* Общее */}
      <Route path="about" element={<About />} />
      <Route path="result" element={<Result />} />
      <Route path="reviews" element={<Reviews />} />

      {/* Админка */}
      <Route path="admin" element={<Admin />} />
      <Route path="admin/create" element={<CreateArticles />} />

      {/* Аутентификация */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Раздел концертов */}
      <Route path="concerts" element={<ConcertsHome />} />
      <Route path="concerts/:card" element={<Card />} />
    </Routes>
  );
}
