import React from "react";
import '../css/footer.css';
import logo from "../assets/logo.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1: Về BAMEPHARM */}
        <div className="footer-column">
          <h3 className="footer-title">VỀ BAMEPHARM</h3>
          <ul className="footer-list">
            <li><a href="">Tầm nhìn - Sứ mệnh</a></li>
            <li><a href="">Hành trình phát triển</a></li>
            <li><a href="">Thành tựu</a></li>
            <li><a href="">Cổ đông tổ chức</a></li>
          </ul>
        </div>

        {/* Column 2: Sản Phẩm */}
        <div className="footer-column">
          <h3 className="footer-title">SẢN PHẨM</h3>
          <ul className="footer-list">
            <li><a href="">Danh mục sản phẩm TV.PHARM</a></li>
          </ul>
        </div>

        {/* Column 3: Tin Tức */}
        <div className="footer-column">
          <h3 className="footer-title">TIN TỨC</h3>
          <ul className="footer-list">
            <li><a href="">Đại hội đồng cổ đông</a></li>
            <li><a href="">Hoạt động công ty</a></li>
            <li><a href="">Tuyển dụng</a></li>
          </ul>
        </div>

        {/* Column 4: Liên Kết */}
        <div className="footer-column">
          <h3 className="footer-title">LIÊN KẾT</h3>
          <ul className="footer-list">
            <li>Phariton</li>
            <li>Travicol</li>
          </ul>
        </div>

        {/* Right Side: Đã Thông Báo Bộ Công Thương */}
        <div className="footer-badge">
          <img
            src="https://placehold.co/150x60/0056b3/ffffff?text=ĐÃ+THÔNG+BÁO+BỘ+CÔNG+THƯƠNG"
            alt="Đã Thông Báo Bộ Công Thương"
            className="badge-image"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <img
            src={logo}
            alt="Logo"
            className="footer-logo"
          />
          <div className="footer-company-info">
            <p>
              <strong>CÔNG TY CỔ PHẦN DƯỢC PHẨM - Y TẾ ĐẮK LẮK BAMEPHARM</strong>
            </p>
            <p>
              Giấy chứng nhận đăng ký doanh nghiệp số: 4003000036 do Sở Kế Hoạch
              và Đầu Tư Tỉnh Đắk Lắk cấp ngày 25 tháng 04 năm 2008
            </p>
            <p>
              Địa chỉ: 9A Hùng Vương, P. Tự An, Tp. Buôn Ma Thuột, Đắk Lắk
            </p>
            <p>Liên hệ: 0262.381.2394</p>
            <p>Email: bamepharm@yahoo.com</p>
          </div>
        </div>

        <div className="footer-bottom-right">
          <h3 className="footer-title">KẾT NỐI CÙNG BAMEPHARM</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <img
                src="https://placehold.co/30x30/3b5998/ffffff?text=f"
                alt="Facebook"
              />
            </a>
            <a href="#" className="social-icon">
              <img
                src="https://placehold.co/30x30/ff0000/ffffff?text=yt"
                alt="YouTube"
              />
            </a>
            <a href="#" className="social-icon">
              <img
                src="https://placehold.co/30x30/0077b5/ffffff?text=in"
                alt="LinkedIn"
              />
            </a>
            <a href="#" className="social-icon">
              <img
                src="https://placehold.co/30x30/ff5a00/ffffff?text=cart"
                alt="Shop"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;