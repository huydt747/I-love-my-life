import React from "react";
import "../css/tintuc.css";
import placeholder from '../assets/tintuc/default.png';

const articles = [
  {
    id: 1,
    author: "John Doe",
    date: "Aug. 24, 2015",
    title: "Learning to Code",
    subtitle: "Opening a door to the future",
    category: "Coding",
    image: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium..."
  },
  {
    id: 2,
    author: "Jane Doe",
    date: "July. 15, 2015",
    title: "Mastering the Language",
    subtitle: "Java is not the same as JavaScript",
    category: "JavaScript",
    image: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium..."
  },
  {
    id: 3,
    author: "Alice Smith",
    date: "Sep. 10, 2022",
    title: "Understanding AI",
    subtitle: "How artificial intelligence is shaping the world",
    category: "AI",
    image: "",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium..."
  },
  {
    id: 4,
    author: "Bob Johnson",
    date: "Oct. 5, 2022",
    title: "The Future of Web Development",
    subtitle: "Trends and predictions for the next decade",
    category: "Web Development",
    image: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium..."
  },
  {
    id: 5,
    author: "Emma Wilson",
    date: "Nov. 15, 2022",
    title: "Mobile First Approach",
    subtitle: "Why it matters more than ever",
    category: "Mobile",
    image: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium..."
  },
  {
    id: 6,
    author: "Michael Brown",
    date: "Dec. 1, 2022",
    title: "Cybersecurity Essentials",
    subtitle: "Protecting your digital assets",
    category: "Security",
    image: "",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium..."
  }
];

const categories = [
  { name: "Đại hội đồng cổ đông", count: 12 },
  { name: "Công bố thông tin", count: 8 },
  { name: "Báo cáo tài chính", count: 15 },
  { name: "Hoạt động công ty", count: 23 },
  { name: "Tuyển dụng", count: 5 }
];

const recentPosts = [
  { id: 1, title: "Learning to Code", date: "Aug. 24, 2015" },
  { id: 2, title: "Mastering the Language", date: "July. 15, 2015" },
  { id: 3, title: "Understanding AI", date: "Sep. 10, 2022" }
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
        <h3 className="article-title">{article.title}</h3>
        <p className="article-subtitle">{article.subtitle}</p>
        <p className="article-excerpt">{article.content.substring(0, 150)}...</p>
        <a href="#" className="read-more">
          Đọc tiếp <i className="fas fa-arrow-right"></i>
        </a>
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

const TagItem = ({ tag }) => (
  <li className="tag-item">
    <a href="#">{tag}</a>
  </li>
);

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
            <button>Next <i className="fas fa-arrow-right"></i></button>
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