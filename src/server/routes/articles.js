const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Получить все статьи
router.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  res.json(articles);
});

// Добавить новую статью
router.post('/', async (req, res) => {
  const { title, content, category, type } = req.body;
  try {
    const newArticle = new Article({ title, content, category, type });
    const saved = await newArticle.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при создании' });
  }
});

// Удалить статью
router.delete('/:id', async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при удалении' });
  }
});

// Обновить статью
router.put('/:id', async (req, res) => {
  const { title, content, category, type } = req.body;
  try {
    const updated = await Article.findByIdAndUpdate(
      req.params.id,
      { title, content, category, type },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при обновлении' });
  }
});

module.exports = router;