import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/chitiettintuc.css';

const ChitietTinTuc = () => {
  const { slug } = useParams(); // Lấy slug từ URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Fetch bài viết dựa trên slug
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3500/api/articles/slug/${slug}`);
        setArticle(response.data);
        
        // Fetch các bài viết liên quan (cùng category)
        if (response.data.category) {
          const relatedRes = await axios.get(`http://localhost:3500/api/articles?category=${response.data.category}&limit=3`);
          setRelatedArticles(relatedRes.data.data);
        }
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  // Hiệu ứng fade-in
  useEffect(() => {
    if (!loading && !error) {
      const fadeElements = document.querySelectorAll('.fade-in');
      const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            fadeObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      fadeElements.forEach(element => fadeObserver.observe(element));
      return () => fadeElements.forEach(element => fadeObserver.unobserve(element));
    }
  }, [loading, error]);

  if (loading) return <div className="loading">Đang tải...</div>;
  if (error) return <div className="error">Lỗi: {error}</div>;
  if (!article) return <div className="error">Bài viết không tồn tại</div>;

  return (
    <div className="chitiettintuc">
      <div className="news-detail-container">
        <main className="news-content">
          <article>
            <header className="article-header">
              <h1>{article.title}</h1>
              {article.subtitle && <p className="article-subtitle">{article.subtitle}</p>}
              <div className="article-meta">
                <span><i className="fas fa-user"></i> {article.author || "Admin"}</span>
                <span><i className="far fa-calendar-alt"></i> {new Date(article.created_at).toLocaleDateString('vi-VN')}</span>
                {article.category && <span><i className="fas fa-tag"></i> {article.category}</span>}
              </div>
            </header>
            
            {article.image && (
              <div className="article-image-container fade-in">
                <img 
                  className="article-image" 
                  src={article.image} 
                  alt={article.title}
                />
                {article.imageCaption && (
                  <div className="image-caption">{article.imageCaption}</div>
                )}
              </div>
            )}
            
            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
            
            {relatedArticles.length > 0 && (
              <section className="related-news">
                <h2 className="section-title">Tin Liên Quan</h2>
                <div className="news-grid">
                  {relatedArticles.map((related) => (
                    <div className="news-card fade-in" key={related.id}>
                      <div className="card-image-container">
                        <img 
                          className="card-image" 
                          src={related.image || 'https://via.placeholder.com/300x200'} 
                          alt={related.title}
                        />
                      </div>
                      <div className="card-content">
                        <h3 className="card-title">{related.title}</h3>
                        <p className="card-text">{related.excerpt.substring(0, 100)}...</p>
                        {/* <Link to={`/chi-tiet-tin-tuc/${related.slug}`} className="read-more">
                          Xem thêm →
                        </Link> */}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>
        </main>
        
        <aside className="sidebar">
          {/* <div className="sidebar-section">
            <div className="sidebar-header">Tin Nổi Bật</div>
            <div className="sidebar-content">
              <ul className="trending-list">
                {recentPosts.map((post, index) => (
                  <li className="trending-item" key={post.id}>
                    <Link to={`/chi-tiet-tin-tuc/${post.slug || post.id}`} className="trending-link">
                      <span className="trending-number">{index + 1}</span>
                      <span>{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="sidebar-section">
            <div className="sidebar-header">Đăng ký Nhận tin</div>
            <div className="sidebar-content">
              <form className="newsletter-form">
                <input type="email" className="newsletter-input" placeholder="Nhập email của bạn" required />
                <button type="submit" className="newsletter-button">Đăng ký</button>
              </form>
              <p style={{ fontSize: '0.8rem', marginTop: '10px', color: 'var(--text-light)' }}>
                Nhận tin tức y dược mới nhất. Chúng tôi cam kết bảo mật thông tin.
              </p>
            </div>
          </div> */}
        </aside>
      </div>
    </div>
  );
};

export default ChitietTinTuc;