import React, { useState, useEffect } from "react";
import "../css/header.css";
import logo from '../assets/logo.webp'
function Header() {
    const [sticky, setSticky] = useState(false);

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
                <a href="/"><img src={logo} alt="" /></a>
                
            </div>
            <nav className={`header ${sticky ? "sticky" : ""}`}>
                <ul>
                    <li><a href="/">Trang Chủ</a></li>
                    <li><a href="/gioi-thieu">Giới Thiệu</a></li>
                    <li><a href="/tin-tuc">Tin Tức</a></li>
                    <li><a href="/cua-hang">Cửa Hàng</a></li>
                    <li><a href="/lien-he">Liên Hệ</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
