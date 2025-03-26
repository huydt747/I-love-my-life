import React from "react";
import "../css/tintuc.css";
import placeholder from '../assets/tintuc/default.png'
const articles = [
  {
    id: 1,
    author: "John Doe",
    date: "Aug. 24, 2015",
    title: "Learning to Code",
    subtitle: "Opening a door to the future",
    category: "Coding",
    image: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg",
  },
  {
    id: 2,
    author: "Jane Doe",
    date: "July. 15, 2015",
    title: "Mastering the Language",
    subtitle: "Java is not the same as JavaScript",
    category: "JavaScript",
    image: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg",
  },
  {
    id: 3,
    author: "Alice Smith",
    date: "Sep. 10, 2022",
    title: "Understanding AI",
    subtitle: "How artificial intelligence is shaping the world",
    category: "AI",
    image: "",
  },
];

const categories = ["Đại hội đồng cổ đông", "Công bố thông tin", "Báo cáo"];

const ArticleCard = ({ article }) => {
  const imageUrl = article.image ? article.image : placeholder;

  return (
    <div className="blog-card">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <ul className="details">
          <li className="author">
            <a href="#">{article.author}</a>
          </li>
          <li className="date">{article.date}</li>
          <li className="tags">
            <ul>
              <li>
                <a href="#">Learn</a>
              </li>
              <li>
                <a href="#">{article.category}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>{article.title}</h1>
        <h2>{article.subtitle}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p className="read-more">
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
  );
};

const CategoryList = ({ categories }) => (
  <div className="category-list">
    <h3>Tin tức</h3>
    <h3>Cổ đông</h3>
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <a href="#">{category}</a>
        </li>
      ))}
    </ul>
  </div>
);

function TinTuc() {
  return (
    <div className="trang-chu">
      <div className="news-container">
        <div className="main-content">
          <h2 className="news-title-name">Tin Tức</h2>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="sidebar">
          <h2>Chuyên mục</h2>
          <CategoryList categories={categories} />
        </div>
      </div>
    </div>
  );
}

export default TinTuc;
