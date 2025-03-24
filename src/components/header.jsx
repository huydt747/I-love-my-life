import React, { useState, useEffect } from "react";
import "../css/header.css";
import logo from '../assets/logo.png'
function Header() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 115);
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
                    <li><a href="/">Giới Thiệu</a></li>
                    <li><a href="/">Tin Tức</a></li>
                    <li><a href="/">Cửa Hàng</a></li>
                    <li><a href="/">Liên Hệ</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
