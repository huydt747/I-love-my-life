const pool = require('../config/db.js');

const CategoryController = {
  // Lấy tất cả danh mục
  getAllCategories: async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM categories');
      res.json({ success: true, data: rows });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // Lấy danh mục theo ID
  getCategoryById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query('SELECT * FROM categories WHERE id = ?', [id]);
      
      if (rows.length === 0) {
        return res.status(404).json({ success: false, message: 'Category not found' });
      }
      
      res.json({ success: true, data: rows[0] });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // Tạo danh mục mới
  createCategory: async (req, res) => {
    try {
      const { name, slug, description } = req.body;
      
      if (!name || !slug) {
        return res.status(400).json({ 
          success: false, 
          message: 'Name and slug are required' 
        });
      }
      
      const [result] = await pool.query(
        'INSERT INTO categories (name, slug, description) VALUES (?, ?, ?)',
        [name, slug, description]
      );
      
      res.status(201).json({ 
        success: true, 
        data: { id: result.insertId, name, slug, description } 
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // Cập nhật danh mục
  updateCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, slug, description } = req.body;
      
      const [result] = await pool.query(
        'UPDATE categories SET name = ?, slug = ?, description = ? WHERE id = ?',
        [name, slug, description, id]
      );
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ success: false, message: 'Category not found' });
      }
      
      res.json({ success: true, message: 'Category updated successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // Xóa danh mục
  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const [result] = await pool.query('DELETE FROM categories WHERE id = ?', [id]);
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ success: false, message: 'Category not found' });
      }
      
      res.json({ success: true, message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // Lấy thống kê số bài viết theo danh mục
  getCategoryStats: async (req, res) => {
    try {
      const [rows] = await pool.query(`
        SELECT 
          c.id,
          c.name,
          c.slug,
          COUNT(a.id) as count
        FROM categories c
        LEFT JOIN articles a ON c.id = a.category_id
        GROUP BY c.id
      `);
      res.json({ success: true, data: rows });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  
};


module.exports = CategoryController;