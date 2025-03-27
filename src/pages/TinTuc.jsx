import React from "react";
import placeholder from '../assets/tintuc/default.png';
import "../css/tintuc.css";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    author: "Admin",
    date: "1/1/2025",
    title: "LỜI TRI ÂN 45 NĂM THÀNH LẬP BAMEPHARM",
    category: "Tin tức",
    image: "https://bamepharm.com.vn/wp-content/uploads/2021/03/45-nam-326x245.jpg",
    content: "Thực hiện sứ mệnh gắn sản xuất kinh doanh với trách nhiệm xã hội, công ty cổ phần Dược – Vật tư y tế Đắk Lắk"
  },
  {
    id: 2,
    author: "Admin",
    date: "1/1/2025",
    title: "Kết quả Đại hội cổ đông thường niên năm 2020",
    category: "Tin tức",
    image: "https://bamepharm.com.vn/wp-content/uploads/2020/06/Phong-chinh-Dai-hoi-678x509.jpg",
    content: "Sau thời gian phải gia hạn vì đại dịch Covid-19, sáng ngày 26/06/2020, Bamepharm tổ chức Đại hội đồng cổ đông thường niên 2020 tại "
  },
  {
    id: 3,
    author: "Admin",
    date: "1/1/2025",
    title: "Kết quả Đại hội Chi bộ nhiệm kỳ 2020-2025",
    category: "Tin tức",
    image: "https://bamepharm.com.vn/wp-content/uploads/2020/06/IMG_3594-1-678x509.jpg",
    content: "Thực hiện Chỉ thị số: 35-CT/TW ngày 30/5/2019 của Bộ Chính trị; Hướng dẫn số 26-HD/BTCTW của Ban Tổ chức Trung ương; Kế hoạch"
  },
];

const categories = [
  { name: "Đại hội đồng cổ đông", count: 12 },
  { name: "Công bố thông tin", count: 8 },
  { name: "Báo cáo tài chính", count: 15 },
  { name: "Hoạt động công ty", count: 23 },
  { name: "Tuyển dụng", count: 5 }
];

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
        <img src={imageUrl} alt={article.title} />
        <div className="article-category">{article.category}</div>
      </div>
      <div className="article-content">
        <div className="article-meta">
          <span><i className="fas fa-user"></i> {article.author}</span>
          <span><i className="far fa-calendar-alt"></i> {article.date}</span>
        </div>
        <h3 className="article-title">
          <Link to={`/chi-tiet-tin-tuc`}>{article.title}</Link>
        </h3>
        <p className="article-excerpt">{article.content.substring(0, 150)}...</p>
        <Link to={`/chi-tiet-tin-tuc`} className="read-more">
          Đọc tiếp <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

const CategoryItem = ({ category }) => (
  <li className="category-item">
    <a href="#">
      {category.name} <span>({category.count})</span>
    </a>
  </li>
);

const RecentPostItem = ({ post }) => (
  <li className="recent-post">
    <a href="#">
      <h4>{post.title}</h4>
      <span>{post.date}</span>
    </a>
  </li>
);

// const TagItem = ({ tag }) => (
//   <li className="tag-item">
//     <a href="#">{tag}</a>
//   </li>
// );

function TinTuc() {
  return (
    <div className="news-page">
      {/* Hero Banner */}
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
            <div className="view-all">
              <a href="#">Xem tất cả <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="articles-grid">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="pagination">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Trang tiếp <i className="fas fa-arrow-right"></i></button>
          </div>
        </main>

        <aside className="news-sidebar">
          {/* Search Widget */}
          <div className="sidebar-widget search-widget">
            <h3>Tìm kiếm</h3>
            <div className="search-box">
              <input type="text" placeholder="Tìm kiếm tin tức..." />
              <button><i className="fas fa-arrow-right"></i></button>
            </div>
          </div>

          {/* Categories Widget */}
          <div className="sidebar-widget categories-widget">
            <h3>Danh mục</h3>
            <ul className="categories-list">
              {categories.map((category, index) => (
                <CategoryItem key={index} category={category} />
              ))}
            </ul>
          </div>

          {/* Recent Posts Widget */}
          <div className="sidebar-widget recent-posts-widget">
            <h3>Bài viết gần đây</h3>
            <ul className="recent-posts-list">
              {recentPosts.map((post) => (
                <RecentPostItem key={post.id} post={post} />
              ))}
            </ul>
          </div>

          {/* Tags Widget
          <div className="sidebar-widget tags-widget">
            <h3>Tags</h3>
            <ul className="tags-list">
              {tags.map((tag, index) => (
                <TagItem key={index} tag={tag} />
              ))}
            </ul>
          </div> */}
        </aside>
      </div>
    </div>
  );
}

export default TinTuc;