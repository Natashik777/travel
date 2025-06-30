import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    position: 'relative',
    transition: 'color 0.3s',
  };

  const hoverStyle = {
    color: '#007bff',
    textDecoration: 'underline',
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 30px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ddd',
      }}
    >
      {/* Логотип слева */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="./image/logo.jpg"
          alt="Логотип"
          style={{ height: 40, marginRight: 10 }}
        />
        <h2 style={{ margin: 0, color:'blue' }}>TravelEesti</h2>
      </div>

      {/* Навигация по центру */}
      <nav>
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '30px',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          {['/', '/places', '/reviews'].map((path, index) => {
            const labels = ['Главная', 'Достопримечательности', 'Отзывы'];
            return (
              <li key={path}>
                <Link
                  to={path}
                  style={linkStyle}
                  onMouseOver={e => {
                    e.target.style.color = hoverStyle.color;
                    e.target.style.textDecoration = hoverStyle.textDecoration;
                  }}
                  onMouseOut={e => {
                    e.target.style.color = linkStyle.color;
                    e.target.style.textDecoration = 'none';
                  }}
                >
                  {labels[index]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Войти справа */}
      <div>
        <Link
          to="/login"
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '5px',
            textDecoration: 'none',
          }}
        >
          Войти
        </Link>
      </div>
    </header>
  );
}
