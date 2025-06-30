import React from 'react';

export default function Card({ title, img }) {
  return (
    <div style={{ padding: '0 15px' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
        <img src={img} alt={title} style={{
          width: '100%',
          height: 100,
          objectFit: 'cover',
        }} />
        <div style={{ padding: '10px', textAlign: 'center' }}>
          <h3 style={{ margin: 0 }}>{title}</h3>
        </div>
      </div>
    </div>
  );
}