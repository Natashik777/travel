import React, { useState } from 'react';
import AdminForm from '../components/AdminForm';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      setTitle('');
      setContent('');
      alert('Статья добавлена!');
    } catch (err) {
      alert('Ошибка при добавлении статьи');
    }
  };

  return (
    <div>
      <AdminForm/>
       
    </div>
  );
}