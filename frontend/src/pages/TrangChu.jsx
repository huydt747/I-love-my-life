import React from "react";

import Slideshow from "../utils/slideshow";
import Quote from "../utils/quote";
import DistributionSystem from "../utils/DistributionSystem";
import VisionSection from "../utils/vision";

import img1 from "../assets/trangchu/1.jpeg";
import img2 from "../assets/trangchu/2.jpeg";

const images = [img1, img2];

const news = [
  {
    id: 1,
    title: "LỜI TRI ÂN 45 NĂM THÀNH LẬP BAMEPHARM",
    date: "01/04/2021",
    excerpt: "Thực hiện sứ mệnh gắn sản xuất kinh doanh với trách nhiệm xã hội...",
    image: "https://bamepharm.com.vn/wp-content/uploads/2021/03/45-nam-326x245.jpg",
    isFeatured: true
  },
  {
    id: 2,
    title: "Kết quả Đại hội cổ đông thường niên năm 2020",
    date: "29/06/2020",
    excerpt: "Sau thời gian phải gia hạn vì đại dịch Covid-19...",
    image: "https://bamepharm.com.vn/wp-content/uploads/2020/06/Phong-chinh-Dai-hoi-678x509.jpg"
  },
  {
    id: 3,
    title: "Kết quả Đại hội Chi bộ nhiệm kỳ 2020-2025",
    date: "24/06/2020",
    excerpt: "Thực hiện Chỉ thị số: 35-CT/TW ngày 30/5/2019 của Bộ Chính trị...",
    image: "https://bamepharm.com.vn/wp-content/uploads/2020/06/IMG_3594-1-678x509.jpg"
  },
  {
    id: 4,
    title: "Lịch nghỉ Tết Nguyên đán Canh Tý 2020",
    date: "18/01/2020",
    excerpt: "",
    image: "https://bamepharm.com.vn/wp-content/uploads/2020/01/Thong-bao-nghi-Tet-Canh-Ty-2020-small-678x509.jpg"
  }
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
                            <Quote/>
                        </div>
                        <div className="slogan">
                            <h2>Vì sức khỏe và sắc đẹp của bạn</h2>
                            <p>Với hơn 45 năm kinh nghiệm trong ngành dược phẩm, chúng tôi cam kết mang đến những sản phẩm chất lượng cao, an toàn và hiệu quả.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            <VisionSection />

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
                                <h3><a href="#">{news[0].title}</a></h3>
                                <p>{news[0].excerpt}</p>
                                <a href="#" className="read-more">Đọc tiếp →</a>
                            </div>
                        </div>
                        
                        <div className="news-list">
                            {news.slice(1).map(item => (
                                <div className="news-item" key={item.id}>
                                    <div className="news-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="news-content">
                                        <span className="news-date">{item.date}</span>
                                        <h4><a href="#">{item.title}</a></h4>
                                        {item.excerpt && <p>{item.excerpt}</p>}
                                        <a href="#" className="read-more">Đọc tiếp →</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="divider"></div>
            
            {/* Bản đồ các kiểu */}
            <DistributionSystem />
        </div>
    );
}

export default TrangChu;