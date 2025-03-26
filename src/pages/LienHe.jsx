import React from "react";
import "../css/lienhe.css";

function LienHe() {
  return (
    <div className="contact-page">
      <form action="https://fabform.io/f/xxxxx" method="post" className="contact-form-container">
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-grid">
              {/* Contact Info Section */}
              <div className="contact-info-section">
                <div className="contact-info-card">
                  <div className="contact-image-wrapper">
                    <img
                      src="https://pagedone.io/asset/uploads/1696488602.png"
                      alt="Contact Us"
                      className="contact-image"
                    />
                    <h1 className="contact-title">Liên Hệ Chúng Tôi</h1>
                  </div>
                  
                  <div className="contact-details">
                    <div className="info-item">
                      <div className="info-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="info-content">
                        <h4>Điện thoại</h4>
                        <a href="tel:470-601-1911">470-601-1911</a>
                      </div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="info-content">
                        <h4>Email</h4>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="info-content">
                        <h4>Địa chỉ</h4>
                        <p>654 Sycamore Avenue, Meadowville, WA 76543</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="contact-form-section">
                <div className="form-wrapper">
                  <h2 className="form-title">Gửi tin nhắn cho chúng tôi</h2>
                  
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Họ và tên"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Email"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  
                  <div className="form-group">
                    <div className="preference-title">Phương thức liên hệ ưa thích</div>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input type="radio" name="contact-method" value="email" defaultChecked />
                        <span className="radio-custom"></span>
                        Email
                      </label>
                      <label className="radio-option">
                        <input type="radio" name="contact-method" value="phone" />
                        <span className="radio-custom"></span>
                        Điện thoại
                      </label>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      className="form-textarea"
                      placeholder="Nội dung tin nhắn"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    <i className="fas fa-paper-plane button-icon"></i>
                    Gửi tin nhắn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default LienHe;