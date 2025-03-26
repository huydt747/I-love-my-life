import React from "react";
import img1 from "../assets/trangchu/1.jpeg";
import img2 from "../assets/trangchu/2.jpeg";
import img3 from "../assets/trangchu/3.webp";
import Slideshow from "../utils/slideshow";
import Quote from "../utils/quote";

const images = [img1, img2];

function TrangChu() {
    return (
        <div className="trangchu">
            <Slideshow images={images} interval={3000} />
            <div className="block-1">
                <div className="mini-block-1">
                    <Quote/>
                </div>
                <div className="mini-block-2">
                    <i>Giới thiệu chung về slogan hoặc công ty</i>
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
                <h1>Tin Tức Mới Nhất</h1>

                <div className="news-grid">
                    {/* Bài viết chính */}
                    <div className="news-main">
                        <img src="https://bamepharm.com.vn/wp-content/uploads/2021/03/45-nam-326x245.jpg" alt="Tin nóng" />
                        <h2><a href="#">LỜI TRI ÂN 45 NĂM THÀNH LẬP BAMEPHARM </a></h2>
                        <span className="news-date">01/04/2021</span>
                        <p>Thực hiện sứ mệnh gắn sản xuất kinh doanh với trách nhiệm xã hội, công ty cổ phần Dược – Vật tư y tế Đắk […]</p>
                    </div>

                    {/* Danh sách các bài viết nhỏ hơn */}
                    <div className="news-list">
                        <div className="news-item">
                            <img src="https://bamepharm.com.vn/wp-content/uploads/2020/06/Phong-chinh-Dai-hoi-678x509.jpg" alt="Tin 1" />
                            <div>
                                <h3><a href="#">Kết quả Đại hội cổ đông thường niên năm 2020 </a></h3>
                                <span className="news-date">29/06/2020</span>
                                <p>Sau thời gian phải gia hạn vì đại dịch Covid-19, sáng ngày 26/06/2020, Bamepharm tổ chức Đại hội đồng cổ đông thường niên 2020 tại […]</p>
                            </div>
                        </div>
                        <div className="news-item">
                            <img src="https://bamepharm.com.vn/wp-content/uploads/2020/06/IMG_3594-1-678x509.jpg" alt="Tin 2" />
                            <div>
                                <h3><a href="#">Kết quả Đại hội Chi bộ nhiệm kỳ 2020-2025</a></h3>
                                <span className="news-date">24/06/2020</span>
                                <p>Thực hiện Chỉ thị số: 35-CT/TW ngày 30/5/2019 của Bộ Chính trị; Hướng dẫn số 26-HD/BTCTW của Ban Tổ chức Trung ương; Kế hoạch […]</p>
                            </div>
                        </div>
                        <div className="news-item">
                            <img src="https://bamepharm.com.vn/wp-content/uploads/2020/01/Thong-bao-nghi-Tet-Canh-Ty-2020-small-678x509.jpg" alt="Tin 3" />
                            <div>
                                <h3><a href="#">Lịch nghỉ Tết Nguyên đán Canh Tý 2020 </a></h3>
                                <span className="news-date">18/01/2020</span>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <dib className="block-4">
                <h1>Trưng bày sản phẩm</h1>
            </dib>


        </div>
        
    );
}

export default TrangChu;
