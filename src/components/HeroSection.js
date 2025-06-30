import React from 'react';

export default function HeroSection({ onScrollClick }) {
  return (
    <div style={{ position: 'relative', height: 400, fontWeight: 500 }}>
      <img
        src="/image/main.jpg"
        alt="main"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <h1 style={{
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
        position: 'absolute',
        bottom: 130,
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
        Путешествуй вместе с нами
      </h1>
      <p style={{
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        position: 'absolute',
        bottom: 50,
        left: '10%',
        right: '10%',
      }}>
        Отправься с нами в удивительный неизведанный мир природы и приключений. Строй свой маршрут уже сегодня.
      </p>
      <button
        onClick={onScrollClick}
        style={{
          position: 'absolute',
          bottom: 30,
          right: 30,
          padding: '10px 20px',
          fontWeight: 'bold',
          backgroundColor: 'blue',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          color: 'white',
        }}
      >
        Выбрать поездку
      </button>
    </div>
  );
}
