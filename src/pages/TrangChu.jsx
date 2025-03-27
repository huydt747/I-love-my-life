import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/trangchu/1.jpeg";
import img2 from "../assets/trangchu/2.jpeg";
import img3 from "../assets/trangchu/3.webp";
import Quote from "../utils/quote";
import Slideshow from "../utils/slideshow";

const images = [img1, img2];
const products = [
  { name: "Chăm sóc da mặt", category: "skincare" },
  { name: "Chăm sóc cơ thể", category: "bodycare" },
  { name: "Chăm sóc răng miệng", category: "oralcare" },
  { name: "Tinh dầu các loại", category: "essential-oils" },
];

const news = [
  {
    id: 1,
    title: "LỜI TRI ÂN 45 NĂM THÀNH LẬP BAMEPHARM",
    date: "01/04/2021",
    excerpt:
      "Thực hiện sứ mệnh gắn sản xuất kinh doanh với trách nhiệm xã hội...",
    image:
      "https://bamepharm.com.vn/wp-content/uploads/2021/03/45-nam-326x245.jpg",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Kết quả Đại hội cổ đông thường niên năm 2020",
    date: "29/06/2020",
    excerpt: "Sau thời gian phải gia hạn vì đại dịch Covid-19...",
    image:
      "https://bamepharm.com.vn/wp-content/uploads/2020/06/Phong-chinh-Dai-hoi-678x509.jpg",
  },
  {
    id: 3,
    title: "Kết quả Đại hội Chi bộ nhiệm kỳ 2020-2025",
    date: "24/06/2020",
    excerpt:
      "Thực hiện Chỉ thị số: 35-CT/TW ngày 30/5/2019 của Bộ Chính trị...",
    image:
      "https://bamepharm.com.vn/wp-content/uploads/2020/06/IMG_3594-1-678x509.jpg",
  },
  {
    id: 4,
    title: "Lịch nghỉ Tết Nguyên đán Canh Tý 2020",
    date: "18/01/2020",
    excerpt: "",
    image:
      "https://bamepharm.com.vn/wp-content/uploads/2020/01/Thong-bao-nghi-Tet-Canh-Ty-2020-small-678x509.jpg",
  },
];

function TrangChu() {
  return (
    <div className="trangchu">
      {/* Hero Section với Slideshow */}
      <section className="hero-section">
        <Slideshow images={images} interval={3000} />
      </section>

      {/* Giới thiệu */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="quote-wrapper">
              <Quote />
            </div>
            <div className="slogan">
              <h2>Vì sức khỏe và sắc đẹp của bạn</h2>
              <p>
                Với hơn 45 năm kinh nghiệm trong ngành dược phẩm, chúng tôi cam
                kết mang đến những sản phẩm chất lượng cao, an toàn và hiệu quả.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Sản phẩm */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Các sản phẩm của chúng tôi</h2>
          <div className="products-grid">
          {products.map((product, index) => (
              <Link to="/cua-hang"><div className="product-card" key={index}>
                <div className="product-image">
                  <img src={img3} alt={product.name} />
                  <div className="product-overlay">
                    <button className="view-button">Xem chi tiết</button>
                  </div>
                </div>
                <h3 className="product-name">{product.name}</h3>
              </div></Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Tin tức */}
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">Tin Tức Mới Nhất</h2>
          <div className="news-container">
            <div className="featured-news">
              <div className="featured-image">
                <img src={news[0].image} alt={news[0].title} />
              </div>
              <div className="featured-content">
                <span className="news-date">{news[0].date}</span>
                <h3>
                  <a href="#">{news[0].title}</a>
                </h3>
                <p>{news[0].excerpt}</p>
                <Link to="/chi-tiet-tin-tuc"><a href="#" className="read-more">
                  Đọc tiếp →
                </a></Link>
              </div>
            </div>

            <div className="news-list">
              {news.slice(1).map((item) => (
                <div className="news-item" key={item.id}>
                  <div className="news-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-content">
                    <span className="news-date">{item.date}</span>
                    <h4>
                      <a href="#">{item.title}</a>
                    </h4>
                    {item.excerpt && <p>{item.excerpt}</p>}
                    <a href="#" className="read-more">
                      Đọc tiếp →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Trưng bày sản phẩm */}
      <section className="product-showcase">
        <div className="container">
          <h2 className="section-title">Sản phẩm nổi bật</h2>

          <div className="product-grid">
            {/* Product 1 */}
            <div className="product-card">
              <div className="product-badge">Bán chạy</div>
              <div className="product-image">
                <img
                  src="https://cdn.nhathuoclongchau.com.vn/unsafe/600x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00021929_perfect_white_60v_3739_600f_large_6794b33ce3.JPG"
                  alt="Thực phẩm bảo vệ sức khỏe"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">Thực phẩm bảo vệ sức khỏe</h3>
                <div className="product-price">
                  <span className="current-price">1.432.000đ</span>
                  <span className="original-price">1.600.000đ</span>
                </div>
                <div className="product-rating">
                  <i className="fas fa-star star filled"></i>
                  <i className="fas fa-star star filled"></i>
                  <i className="fas fa-star star filled"></i>
                  <i className="fas fa-star star filled"></i>
                  <i className="fas fa-star star"></i>
                  <span className="rating-count">(128)</span>
                </div>
                <Link to="/lien-he">
                  <button className="add-to-cart">
                    <i className="fas fa-phone"></i> Liên hệ ngay
                  </button>
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card">
              <div className="product-badge new">Mới</div>
              <div className="product-image">
                <img src="https://example.com/product2.jpg" alt="Sản phẩm 2" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Viên uống bổ sung collagen</h3>
                <div className="product-price">
                  <span className="current-price">890.000đ</span>
                </div>
                <div className="product-rating">
                  <i className="fas fa-star star filled"></i>
                  <i className="fas fa-star star filled"></i>
                  <i className="fas fa-star star filled"></i>
                  <i className="fas fa-star star filled"></i>
                  <i className="fas fa-star-half-alt star half"></i>
                  <span className="rating-count">(256)</span>
                </div>
                <Link to="/lien-he">
                  <button className="add-to-cart">
                    <i className="fas fa-phone"></i> Liên hệ ngay
                  </button>
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card">
              <div className="product-image">
                <img src="https://example.com/product3.jpg" alt="Sản phẩm 3" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Tinh chất dưỡng da</h3>
                <div className="product-price">
                  <span className="current-price">1.250.000đ</span>
                  <span className="original-price">1.500.000đ</span>
                </div>
                <div className="product-rating">
                  <i className="fas fa-star star filled"></i>
                  <i className="fas fa-star star filled"></i>
                  <i className="fas fa-star star filled"></i>
                  <i className="fas fa-star star"></i>
                  <i className="fas fa-star star"></i>
                  <span className="rating-count">(64)</span>
                </div>
                <Link to="/lien-he">
                  <button className="add-to-cart">
                    <i className="fas fa-phone"></i> Liên hệ ngay
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrangChu;
