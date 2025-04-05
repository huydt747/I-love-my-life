const Article = require('../models/articlesModel.js');

exports.getAllArticles = async (req, res) => {
    try {
        // Lấy tham số từ query string
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';
        const category_id = req.query.category_id || null;
        const offset = (page - 1) * limit;

        // Xây dựng điều kiện WHERE
        let whereConditions = [];
        let queryParams = [];

        if (search) {
            whereConditions.push('(title LIKE ? OR content LIKE ?)');
            queryParams.push(`%${search}%`, `%${search}%`);
        }

        if (category_id) {
            whereConditions.push('category_id = ?');
            queryParams.push(category_id);
        }

        const whereClause = whereConditions.length > 0 
            ? `WHERE ${whereConditions.join(' AND ')}` 
            : '';

        // Lấy tổng số bài viết
        const totalArticles = await Article.getTotalCount(whereClause, queryParams);
        const totalPages = Math.ceil(totalArticles / limit);

        // Lấy bài viết với phân trang
        const articles = await Article.findAllPaginated(whereClause, queryParams, limit, offset);

        res.json({
            success: true,
            data: articles,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalItems: totalArticles,
                itemsPerPage: limit
            }
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
};
exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getArticleBySlug = async (req, res) => {
    try {
        const article = await Article.findBySlug(req.params.slug);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createArticle = async (req, res) => {
    try {
        const { title, image, excerpt, content, slug } = req.body;
        const id = await Article.create({ title, image, excerpt, content, slug });
        res.status(201).json({ id, message: 'Article created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateArticle = async (req, res) => {
    try {
        const { title, image, excerpt, content, slug } = req.body;
        await Article.update(req.params.id, { title, image, excerpt, content, slug });
        res.json({ message: 'Article updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteArticle = async (req, res) => {
    try {
        await Article.delete(req.params.id);
        res.json({ message: 'Article deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.searchArticles = async (req, res) => {
    try {
        console.log("Search API Query:", req.query);  // Kiểm tra query nhận được
        const searchTerm = req.query.search || '';  // Đổi từ `q` thành `search`
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        // Thêm phương thức tìm kiếm trong model
        const [articles, totalArticles] = await Article.search(searchTerm, limit, offset);
        const totalPages = Math.ceil(totalArticles / limit);

        res.json({
            success: true,
            data: articles,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalItems: totalArticles,
                itemsPerPage: limit
            }
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
};

exports.getRecentArticles = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 3;
        const articles = await Article.findRecent(limit);
        res.json({ success: true, data: articles });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};