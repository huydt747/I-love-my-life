import React from "react";
import '../css/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Về chúng tôi</h3>
          <p>
            Chúng tôi cung cấp các sản phẩm chất lượng cao, đảm bảo sự hài lòng
            cho khách hàng trên toàn Việt Nam.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Hỗ trợ khách hàng</h3>
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-envelope"></i> Liên hệ
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-question-circle"></i> Câu hỏi thường gặp
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-truck"></i> Vận chuyển & Đổi trả
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-map-marker-alt"></i> Theo dõi đơn hàng
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Thông tin</h3>
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-shield-alt"></i> Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-file-alt"></i> Điều khoản sử dụng
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-briefcase"></i> Cơ hội nghề nghiệp
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-newspaper"></i> Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Kết nối với chúng tôi</h3>
          <p>Đăng ký nhận thông tin về sản phẩm mới và ưu đãi hấp dẫn.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Nhập email của bạn" />
            <button>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
