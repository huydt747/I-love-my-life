import React, { useState, useEffect } from "react";
import "../css/header.css";
import logo from "../assets/logo.webp";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [shareholderDropdownOpen, setShareholderDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 105);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="header-image">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <nav className={`header ${sticky ? "sticky" : ""}`}>
        <ul>
          <li><a href="/">TRANG CHỦ</a></li>
          <li><a href="/gioi-thieu">GIỚI THIỆU</a></li>
          <li><a href="/san-pham">SẢN PHẨM</a></li>
          {/* <li><a href="/phan-phoi">PHÂN PHỐI</a></li>

          <li
            className="nav-dropdown"
            onMouseEnter={() => setShareholderDropdownOpen(true)}
            onMouseLeave={() => setShareholderDropdownOpen(false)}
          >
            <a href="/quan-he-co-dong">
              QUAN HỆ CỔ ĐÔNG {shareholderDropdownOpen ? "▴" : "▾"}
            </a>
            <div className={`nav-dropdown-menu ${shareholderDropdownOpen ? "show" : ""}`}>
              <a href="/quan-he-co-dong/bao-cao-tai-chinh">Báo cáo tài chính</a>
              <a href="/quan-he-co-dong/dai-hoi-co-dong">Đại hội cổ đông</a>
            </div>
          </li>
 */}
          <li
            className="nav-dropdown"
            onMouseEnter={() => setNewsDropdownOpen(true)}
            onMouseLeave={() => setNewsDropdownOpen(false)}
          >
            <a href="/tin-tuc">
              TIN TỨC {newsDropdownOpen ? "▴" : "▾"}
            </a>
            <div className={`nav-dropdown-menu ${newsDropdownOpen ? "show" : ""}`}>
              <a href="/tin-tuc/danh-muc/dai-hoi-dong-co-dong-1743856974">Đại hội đồng cổ đông</a>
              <a href="/tin-tuc/danh-muc/hoat-dong-cong-ty-1743856974">Hoạt động công ty</a>
              <a href="/tin-tuc/danh-muc/tuyen-dung-1743856974">Tuyển dụng</a>
            </div>
          </li>

          <li><a href="/lien-he">LIÊN HỆ</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
