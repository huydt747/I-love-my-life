import React from "react";
import img1 from "../assets/trangchu/1.jpeg";
import img2 from "../assets/trangchu/2.jpeg";
import img3 from "../assets/trangchu/3.webp";
import Slideshow from "../utils/slideshow";

const images = [img1, img2];

function TrangChu() {
    return (
        <div className="trangchu">
            <Slideshow images={images} interval={3000} />
            <div className="block-1">
                <div className="mini-block-1">
                    <h1>Tâm điểm kết nối <br /> Mở lối thành công</h1>
                </div>
                <div className="mini-block-2">
                    <p>Giới thiệu chung về slogan hoặc công ty</p>
                </div>
            </div>
            <div className="block-2">
                <h1>Các sản phẩm của chúng tôi</h1>
                <div className="mini-block">
                    <div className="product">       
                        <img src={img3} alt="Hình 1" />
                        <div className="product-info">Chăm sóc da mặt</div>
                    </div>
                    <div className="product">
                        <img src={img3} alt="Sản phẩm 2" />
                        <div className="product-info">Chăm sóc cơ thể</div>
                    </div>
                    <div className="product">
                        <img src={img3} alt="Sản phẩm 3" />
                        <div className="product-info">Chăm sóc răng miệng</div>
                    </div>
                    <div className="product">
                        <img src={img3} alt="Sản phẩm 4" />
                        <div className="product-info">Tinh dầu các loại</div>
                    </div>
                </div>
            </div>
            <div className="news-section">
                <h1 className="news-title">Tin Tức Mới Nhất</h1>

                <div className="news-grid">
                    {/* Bài viết chính */}
                    <div className="news-main">
                        <img src="https://placehold.co/600x400/EEE/31343C" alt="Tin nóng" />
                        <h2><a href="#">Tiêu đề tin nóng</a></h2>
                        <p>Mô tả ngắn gọn về tin tức chính...</p>
                    </div>

                    {/* Danh sách các bài viết nhỏ hơn */}
                    <div className="news-list">
                        <div className="news-item">
                            <img src="https://placehold.co/150x150" alt="Tin 1" />
                            <div>
                                <h3><a href="#">Tiêu đề tin tức 1</a></h3>
                                <p>Mô tả ngắn...</p>
                            </div>
                        </div>
                        <div className="news-item">
                            <img src="https://placehold.co/150x150" alt="Tin 2" />
                            <div>
                                <h3><a href="#">Tiêu đề tin tức 2</a></h3>
                                <p>Mô tả ngắn...</p>
                            </div>
                        </div>
                        <div className="news-item">
                            <img src="https://placehold.co/150x150" alt="Tin 3" />
                            <div>
                                <h3><a href="#">Tiêu đề tin tức 3</a></h3>
                                <p>Mô tả ngắn...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        
    );
}

export default TrangChu;
