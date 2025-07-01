import { useState, useEffect } from "react";
import AdminForm from "./AdminForm";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);
  const [filters, setFilters] = useState({ category: '', type: '' });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await fetch("http://localhost:5555/api/articles");
      const data = await res.json();
      setArticles(data);
    } catch {
      alert("Ошибка загрузки статей");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Удалить статью?")) return;

    try {
      const res = await fetch(`http://localhost:5555/api/articles/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error("Ошибка удаления");
      setArticles((prev) => prev.filter((a) => a._id !== id));
    } catch {
      alert("Ошибка при удалении");
    }
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
  };

  const handleArticleSaved = (savedArticle) => {
    setArticles((prev) => {
      const exists = prev.find((a) => a._id === savedArticle._id);
      if (exists) {
        return prev.map((a) => a._id === savedArticle._id ? savedArticle : a);
      } else {
        return [savedArticle, ...prev];
      }
    });
  };

  const filteredArticles = articles.filter(article => {
    return (!filters.category || article.category === filters.category) &&
           (!filters.type || article.type === filters.type);
  });

  return (
    <div>
      <AdminForm
        editingArticle={editingArticle}
        onArticleSaved={handleArticleSaved}
        clearEditing={() => setEditingArticle(null)}
      />

      <h2>Фильтр</h2>
      <input
        placeholder="Фильтр по направлению"
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      />
      <input
        placeholder="Фильтр по виду досуга"
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
      />

      <h2>Список статей</h2>
      <ul>
        {filteredArticles.map((article) => (
          <li key={article._id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <p><b>Направление:</b> {article.category} | <b>Вид досуга:</b> {article.type}</p>
            <button onClick={() => handleEdit(article)}>Редактировать</button>
            <button onClick={() => handleDelete(article._id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
