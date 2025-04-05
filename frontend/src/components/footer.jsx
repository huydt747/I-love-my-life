import React from "react";
import '../css/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1: Về TV.PHARM */}
        <div className="footer-column">
          <h3 className="footer-title">VỀ TV.PHARM</h3>
          <ul className="footer-list">
            <li>Tầm nhìn - Sứ mệnh</li>
            <li>Hành trình phát triển</li>
            <li>Thành tựu</li>
            <li>Cổ đông tổ chức</li>
          </ul>
        </div>

        {/* Column 2: Sản Phẩm */}
        <div className="footer-column">
          <h3 className="footer-title">SẢN PHẨM</h3>
          <ul className="footer-list">
            <li>Danh mục sản phẩm TV.PHARM</li>
          </ul>
        </div>

        {/* Column 3: Tin Tức */}
        <div className="footer-column">
          <h3 className="footer-title">TIN TỨC</h3>
          <ul className="footer-list">
            <li>Trách nhiệm cộng đồng</li>
            <li>Hoạt động truyền thông TV.PHARM</li>
            <li>Sức khỏe & Đời sống</li>
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
            src="https://placehold.co/150x60/blue/white?text=ĐÃ+THÔNG+BÁO+BỘ+CÔNG+THƯƠNG"
            alt="Đã Thông Báo Bộ Công Thương"
            className="badge-image"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <img
            src="https://placehold.co/50x50?text=TV.PHARM"
            alt="TV.PHARM Logo"
            className="footer-logo"
          />
          <div className="footer-company-info">
            <p>
              <strong>CÔNG TY CỔ PHẦN DƯỢC PHẨM TV.PHARM</strong>
            </p>
            <p>
              Giấy chứng nhận đăng ký doanh nghiệp số: 2100274872 do Sở Kế Hoạch
              và Đầu Tư Tỉnh Trà Vinh cấp ngày 30 tháng 12 năm 2017
            </p>
            <p>
              Địa chỉ: 27 Nguyễn Thị Minh Khai, Phường 9, TP Trà Vinh, Tỉnh Trà
              Vinh
            </p>
            <p>Liên hệ: 1900 636 684</p>
            <p>Email: info@tvpharm.vn</p>
          </div>
        </div>

        <div className="footer-bottom-right">
          <h3 className="footer-title">KẾT NỐI CÙNG TV.PHARM</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <img
                src="https://placehold.co/30x30?text=f"
                alt="Facebook"
              />
            </a>
            <a href="#" className="social-icon">
              <img
                src="https://placehold.co/30x30?text=yt"
                alt="YouTube"
              />
            </a>
            <a href="#" className="social-icon">
              <img
                src="https://placehold.co/30x30?text=in"
                alt="LinkedIn"
              />
            </a>
            <a href="#" className="social-icon">
              <img
                src="https://placehold.co/30x30?text=cart"
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
