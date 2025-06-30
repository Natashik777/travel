import React from 'react';
import ReviewForm from '../components/ReviewForm';

function Reviews() {
  const handleNewReview = async (review) => {
    console.log('Новый отзыв:', review);

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке отзыва');
      }

      const result = await response.json();
      console.log('Отзыв успешно отправлен:', result);
      // Можно показать сообщение или очистить форму
    } catch (error) {
      console.error('Ошибка при отправке отзыва:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Название места</h2>
      {/* Здесь может быть информация о месте */}

      <ReviewForm onSubmitReview={handleNewReview} />
    </div>
  );
}

export default Reviews;
