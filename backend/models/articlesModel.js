const pool = require('../config/db.js');

class Article {
    static async create({ title, image, excerpt, content, slug }) {
        const [result] = await pool.execute(
            'INSERT INTO articles (title, image, date, excerpt, content, slug) VALUES (?, ?, CURRENT_DATE, ?, ?, ?)',
            [title, image, excerpt, content, slug]
        );
        return result.insertId;
    }

    static async findAll() {
        const [rows] = await pool.execute('SELECT * FROM articles ORDER BY date DESC');
        return rows;
    }

    static async findById(id) {
        const [rows] = await pool.execute('SELECT * FROM articles WHERE id = ?', [id]);
        return rows[0];
    }

    static async findBySlug(slug) {
        const [rows] = await pool.execute('SELECT * FROM articles WHERE slug = ?', [slug]);
        return rows[0];
    }

    static async update(id, { title, image, excerpt, content, slug }) {
        await pool.execute(
            'UPDATE articles SET title = ?, image = ?, excerpt = ?, content = ?, slug = ? WHERE id = ?',
            [title, image, excerpt, content, slug, id]
        );
        return true;
    }

    static async delete(id) {
        await pool.execute('DELETE FROM articles WHERE id = ?', [id]);
        return true;
    }

    static async findAllPaginated(limit, offset) {
        const [rows] = await pool.execute(
            'SELECT * FROM articles ORDER BY date DESC LIMIT ? OFFSET ?',
            [limit, offset]
        );
        return rows;
    }

    static async getTotalCount() {
        const [rows] = await pool.execute('SELECT COUNT(*) as count FROM articles');
        return rows[0].count;
    }
    
}

module.exports = Article;