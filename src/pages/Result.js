import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';

const mockResults = [
  {
    id: 1,
    title: 'Пляж Пирита',
    description: 'Популярный пляж в Таллине с бесплатной парковкой.',
    images: [
      'https://visitestonia.com/images/3839679/1280px-EU-EE-Tallinn-Pirita-Pirita_beach_in_autumn.jpeg',
      'https://visitestonia.com/images/3839676/pirita_beach_tallinn.jpg',
      'https://f11.pmo.ee/kVo1xmNKtqA2Hlo7R8rK6jeEYy8=/1442x0/filters:format(webp)/nginx/o/2024/05/14/16071363t1h4177.jpg',
    ],
  },
  {
    id: 2,
    title: 'Замок Тоомпеа',
    description: 'Историческое место в центре Таллина.',
    images: [
      '/images/castle1.jpg',
      '/images/castle2.jpg',
      '/images/castle3.jpg',
    ],
  },
];

export default function Result() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  return (
    
    <div><Header />
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 30 }}>Результаты</h2>

      {mockResults.map((place) => (
        <div
          key={place.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: 8,
            padding: 20,
            marginBottom: 30,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
        >
          <h3>{place.title}</h3>
          <p>{place.description}</p>

          <div
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: 10,
              margin: '10px 0',
            }}
          >
            {place.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={place.title}
                style={{
                  width: 200,
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 6,
                }}
              />
            ))}
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              Подробнее
            </button>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              Сохранить
            </button>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              Уже был
            </button>
          </div>
         </div>
      ))}
    </div><Footer/></div>
  );
}