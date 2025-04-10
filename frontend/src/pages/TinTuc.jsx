import React, { useState, useEffect } from "react";
import placeholder from '../assets/tintuc/default.png';
import "../css/tintuc.css";
import { Link , useParams } from "react-router-dom";
import axios from "axios";

const recentPosts = [
  { id: 1, title: "LỜI TRI ÂN 45 NĂM THÀNH LẬP BAMEPHARM", date: "1/1/2025" },
  { id: 2, title: "Kết quả Đại hội cổ đông thường niên năm 2020", date: "1/1/2025" },
  { id: 3, title: "Kết quả Đại hội Chi bộ nhiệm kỳ 2020-2025", date: "1/1/2025" }
];

// const tags = ["Coding", "JavaScript", "AI", "Web", "Mobile", "Security", "Finance", "Business"];

const ArticleCard = ({ article }) => {
  const imageUrl = article.image ? article.image : placeholder;

  return (
    <div className="article-card">
      <div className="article-image">
      <Link to={`/tin-tuc/bai-viet/${article.slug}`}><img src={imageUrl} alt={article.title} /></Link>
        <div className="article-category">{article.category_name || article.category || "Chưa phân loại"}</div>
      </div>
      <div className="article-content">
        <div className="article-meta">
          <span><i className="fas fa-user"></i> {article.author || "Admin"}</span>
          <span><i className="far fa-calendar-alt"></i> {new Date(article.created_at).toLocaleDateString('vi-VN')}</span>
        </div>
        <h3 className="article-title">
        <Link to={`/tin-tuc/bai-viet/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="article-excerpt">{article.excerpt.substring(0, 150)}...</p>
        <Link to={`/tin-tuc/bai-viet/${article.slug}`} className="read-more">
          Đọc tiếp <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};


const CategoryItem = ({ category }) => (
  <li className="category-item">
    <Link to={`/tin-tuc/danh-muc/${category.slug}`}>
      {category.name} <span>({category.count})</span>
    </Link>
  </li>
);

const RecentPostItem = ({ post }) => (
  <li className="recent-post">
    <a href="#">
      <h4>{post.title}</h4>
      <span>{post.created_at}</span>
    </a>
  </li>
);

// const TagItem = ({ tag }) => (
//   <li className="tag-item">
//     <a href="#">{tag}</a>
//   </li>
// );

function TinTuc() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryStats, setCategoryStats] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { categorySlug } = useParams();
  const postsPerPage = 10;

  // Thêm hàm xử lý khi click vào category
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Reset về trang đầu tiên khi chọn danh mục mới
  };
  
  useEffect(() => {
    // Khi categorySlug thay đổi, tìm category tương ứng và cập nhật selectedCategory
    if (categorySlug) {
      const category = categoryStats.find(cat => cat.slug === categorySlug);
      if (category) {
        setSelectedCategory(category.id);
      }
    } else {
      setSelectedCategory(null);
    }
  }, [categorySlug, categoryStats]);

  useEffect(() => {
    const fetchCategoryStats = async () => {
        try {
            const response = await axios.get('http://localhost:3500/api/categories/stats');
            setCategoryStats(response.data.data);
        } catch (err) {
            console.error("Lỗi khi tải thống kê danh mục:", err);
        }
    };
    
    fetchCategoryStats();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`http://localhost:3500/api/articles`, {
        params: {
          page: currentPage,
          limit: postsPerPage,
          search: searchQuery,
          category_id: selectedCategory
        }
      });
      setArticles(response.data.data);
      setTotalPages(response.data.pagination.totalPages);
      setTotalArticles(response.data.pagination.totalItems);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [currentPage, searchQuery, selectedCategory]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchArticles();
  };
  
  // Tính toán bài viết cho trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

  // Thay đổi trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 3; // Số nút tối đa hiển thị (không tính ...)

    // Nếu tổng số trang ít hơn hoặc bằng maxVisibleButtons, hiển thị tất cả
    if (totalPages <= maxVisibleButtons) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
      return buttons;
    }

    // Tính toán các nút sẽ hiển thị
    let startPage, endPage;
    
    // Trang hiện tại ở đầu danh sách
    if (currentPage <= Math.ceil(maxVisibleButtons / 2)) {
      startPage = 1;
      endPage = maxVisibleButtons;
    } 
    // Trang hiện tại ở cuối danh sách
    else if (currentPage >= totalPages - Math.floor(maxVisibleButtons / 2)) {
      startPage = totalPages - maxVisibleButtons + 1;
      endPage = totalPages;
    } 
    // Trang hiện tại ở giữa danh sách
    else {
      startPage = currentPage - Math.floor(maxVisibleButtons / 2);
      endPage = currentPage + Math.floor(maxVisibleButtons / 2);
    }

    // Thêm nút trang đầu tiên và dấu ... nếu cần
    if (startPage > 1) {
      buttons.push(1);
      if (startPage > 2) {
        buttons.push('...');
      }
    }

    // Thêm các nút trang chính
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }

    // Thêm nút trang cuối cùng và dấu ... nếu cần
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push('...');
      }
      buttons.push(totalPages);
    }

    
    return buttons;
  };

  if (loading) return <div className="loading">Đang tải...</div>;
  if (error) return <div className="error">Lỗi: {error}</div>;

  

  

  return (
    <div className="news-page">
      <div className="news-hero">
        <div className="container">
          <h1>Tin Tức & Sự Kiện</h1>
          <p>Cập nhật những thông tin mới nhất về công ty và ngành dược phẩm</p>
        </div>
      </div>

      <div className="container news-container">
        <main className="news-main">
          <div className="section-header">
            <h2>Tin Tức Mới Nhất</h2>
            {/* <div className="view-all">
              <Link to="/tat-ca-tin-tuc">Xem tất cả <i className="fas fa-arrow-right"></i></Link>
            </div> */}
          </div>

          <div className="articles-grid">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          
          <div className="pagination">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className="pagination-nav"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            
            {getPaginationButtons().map((item, index) => (
              item === '...' ? (
                <span key={index} className="pagination-ellipsis">...</span>
              ) : (
                <button
                  key={index}
                  onClick={() => paginate(item)}
                  className={`pagination-page ${currentPage === item ? 'active' : ''}`}
                >
                  {item}
                </button>
              )
            ))}
            
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className="pagination-nav"
            >
               <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </main>

        <aside className="news-sidebar">
          <div className="sidebar-widget search-widget">
            <h3>Tìm kiếm</h3>
            <form onSubmit={handleSearch} className="search-box">
              <input 
                type="text" 
                placeholder="Tìm kiếm tin tức..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
              />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>

          <div className="sidebar-widget categories-widget">
            <h3>Danh mục</h3>
            <ul className="categories-list">
              {/* Thêm nút "Tất cả" */}
              <li className={`category-item ${!selectedCategory ? 'active' : ''}`}>
                <Link to="/tin-tuc">Tất cả</Link>
              </li>
              
              {categoryStats.map((category) => (
                <li 
                  className={`category-item ${selectedCategory === category.id ? 'active' : ''}`} 
                  key={category.id}
                >
                  <Link to={`/tin-tuc/danh-muc/${category.slug}`}>
                    {category.name} <span>({category.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-widget recent-posts-widget">
            <h3>Bài viết gần đây</h3>
            <ul className="recent-posts-list">
              {recentPosts.map((post) => (
                <RecentPostItem key={post.id} post={post} />
              ))}
            </ul>
          </div>

        </aside>
      </div>
    </div>
  );
}

export default TinTuc;