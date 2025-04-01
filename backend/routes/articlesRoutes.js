const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articlesController.js');

// Get all articles
router.get('/', articleController.getAllArticles);

// Get article by ID
router.get('/:id', articleController.getArticleById);

// Get article by slug
router.get('/slug/:slug', articleController.getArticleBySlug);

// Create a new article
router.post('/', articleController.createArticle);

// Update an article
router.put('/:id', articleController.updateArticle);

// Delete an article
router.delete('/:id', articleController.deleteArticle);

module.exports = router;    