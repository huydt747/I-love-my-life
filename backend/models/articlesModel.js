const pool = require('../config/db.js');

class Article {
    static async create({ title, image, excerpt, content, slug }) {
        const [result] = await pool.execute(
            'INSERT INTO articles (title, image, created_at, excerpt, content, slug) VALUES (?, ?, CURRENT_DATE, ?, ?, ?)',
            [title, image, excerpt, content, slug]
        );
        return result.insertId;
    }

    static async findAll() {
        const [rows] = await pool.execute('SELECT * FROM articles ORDER BY created_at DESC');
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

    static async getTotalCount(whereClause = '', params = []) {
        const [rows] = await pool.query(`SELECT COUNT(*) as total FROM articles ${whereClause}`, params);
        return rows[0].total;
    }

    static async findAllPaginated(whereClause = '', params = [], limit, offset) {
        const query = `
            SELECT a.*, c.name as category_name 
            FROM articles a
            LEFT JOIN categories c ON a.category_id = c.id
            ${whereClause}
            ORDER BY a.created_at DESC
            LIMIT ? OFFSET ?
        `;
        const [rows] = await pool.query(query, [...params, limit, offset]);
        return rows;
    }
    
    static async search(searchTerm, limit, offset) {
        const [rows] = await pool.execute(
            `SELECT * FROM articles 
             WHERE title LIKE ? OR content LIKE ? 
             ORDER BY created_at DESC 
             LIMIT ? OFFSET ?`,
            [`%${searchTerm}%`, `%${searchTerm}%`, limit, offset]
        );
        
        const [countRows] = await pool.execute(
            `SELECT COUNT(*) as count FROM articles 
             WHERE title LIKE ? OR content LIKE ?`,
            [`%${searchTerm}%`, `%${searchTerm}%`]
        );
        
        return [rows, countRows[0].count];
    }
    
}

module.exports = Article;