import React, { useState } from 'react';

export default function ReviewForm({ onSubmitReview }) {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [photos, setPhotos] = useState([]);

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 3);
    setPhotos(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('place', place);
    formData.append('rating', rating);
    formData.append('comment', comment);
    formData.append('date', new Date().toISOString());
    formData.append('approved', false);

    photos.forEach((photo, i) => {
      formData.append(`photo${i}`, photo);
    });

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        onSubmitReview && onSubmitReview({ name, place, rating, comment });
        alert('Отзыв отправлен на модерацию.');
        setName('');
        setPlace('');
        setRating(5);
        setComment('');
        setPhotos([]);
      } else {
        alert('Ошибка при отправке отзыва.');
      }
    } catch (err) {
      console.error(err);
      alert('Ошибка отправки.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle} encType="multipart/form-data">
      <h3>Оставьте отзыв</h3>

      <label style={labelStyle}>Ваше имя:</label>
      <input
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      <label style={labelStyle}>Место:</label>
      <select value={place} onChange={(e) => setPlace(e.target.value)} required style={inputStyle}>
        <option value="">Выберите место</option>
        <option value="Ресторан A">Ресторан A</option>
        <option value="Парк B">Парк B</option>
        <option value="Музей C">Музей C</option>
      </select>

      <label style={labelStyle}>Оценка:</label>
      <div style={{ marginBottom: 15 }}>
        {[5, 4, 3, 2, 1].map((star) => (
          <label key={star} style={{ marginRight: 10 }}>
            <input
              type="radio"
              value={star}
              checked={rating === star}
              onChange={() => setRating(star)}
            />
            {' '}★{star}
          </label>
        ))}
      </div>

      <label style={labelStyle}>Комментарий:</label>
      <textarea
        value={comment}
        required
        onChange={(e) => setComment(e.target.value)}
        rows={4}
        style={textareaStyle}
      />

      <label style={labelStyle}>Фото (до 3):</label>
      <input type="file" accept="image/*" multiple onChange={handlePhotoChange} style={inputStyle} />

      <button type="submit" style={buttonStyle}>Отправить отзыв</button>

      <div style={{ marginTop: 20 }}>
        <p>Поделиться:</p>
        <a href="#" style={shareLink}>Facebook</a>{' | '}
        <a href="#" style={shareLink}>Instagram</a>{' | '}
        <a href="#" style={shareLink}>Telegram</a>
      </div>
    </form>
  );
}

// Стили
const formStyle = {
  maxWidth: 500,
  margin: '20px auto',
  padding: 20,
  border: '1px solid #ccc',
  borderRadius: 8,
  backgroundColor: '#f9f9f9',
};

const labelStyle = {
  display: 'block',
  marginBottom: 5,
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: 8,
  marginBottom: 15,
  borderRadius: 4,
  border: '1px solid #ccc',
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical',
};

const buttonStyle = {
  width: '100%',
  padding: 10,
  backgroundColor: '#007bff',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
};

const shareLink = {
  marginRight: 10,
  textDecoration: 'none',
  color: '#007bff',
};
