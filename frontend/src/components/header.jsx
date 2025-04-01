import React, { useState, useEffect } from "react";
import "../css/header.css";
import logo from '../assets/logo.webp';

function Header() {
    const [sticky, setSticky] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 105);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div>
            <div className="header-image">
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <nav className={`header ${sticky ? "sticky" : ""}`}>
                <ul>
                    <li><a href="/">Trang Chủ</a></li>
                    <li><a href="/gioi-thieu">Giới Thiệu</a></li>
                    <li className="dropdown" 
                        onMouseEnter={toggleDropdown}
                        onMouseLeave={closeDropdown}>
                        <a href="/tin-tuc" className="toggle">
                            Tin Tức {dropdownOpen ? '▴' : '▾'}
                        </a>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <a href="/tin-tuc/tin-moi">Tin Mới</a>
                                <a href="/tin-tuc/su-kien">Sự Kiện</a>
                                <a href="/tin-tuc/khuyen-mai">Khuyến Mãi</a>
                            </div>
                        )}
                    </li>
                    <li><a href="/cua-hang">Cửa Hàng</a></li>
                    <li><a href="/lien-he">Liên Hệ</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;