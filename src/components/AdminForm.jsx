import { useState, useEffect } from "react";

export default function AdminForm({ onArticleSaved, editingArticle, clearEditing }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    if (editingArticle) {
      setTitle(editingArticle.title);
      setContent(editingArticle.content);
      setCategory(editingArticle.category || '');
      setType(editingArticle.type || '');
    }
  }, [editingArticle]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const articleData = { title, content, category, type };

    try {
      let response;
      if (editingArticle) {
        response = await fetch(`http://localhost:5555/api/articles/${editingArticle._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(articleData)
        });
      } else {
        response = await fetch("http://localhost:5555/api/articles", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(articleData)
        });
      }

      if (!response.ok) throw new Error("Ошибка сети");
      const saved = await response.json();

      onArticleSaved(saved);
      setTitle('');
      setContent('');
      setCategory('');
      setType('');
      clearEditing();
    } catch (err) {
      alert("Ошибка при сохранении статьи");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingArticle ? 'Редактировать статью' : 'Добавить статью'}</h2>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Контент"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Направление (category)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Вид досуга (type)"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <button type="submit">{editingArticle ? 'Сохранить' : 'Добавить статью'}</button>
    </form>
  );
}