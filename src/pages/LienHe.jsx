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
                  <div className="contact-map-wrapper">
                    <div className="map-container">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7784.998103476081!2d108.046033!3d12.680817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31721d7fee3de183%3A0x43ae3f2bed973cb9!2zOSBIw7luZyBWxrDGoW5nLCBU4buxIEFuLCBCdcO0biBNYSBUaHXhu5l0LCDEkOG6r2sgTOG6r2ssIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1743070392406!5m2!1sen!2sus"
                        width="100%"
                        height="600px"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                      ></iframe>
                    </div>
                  </div>
                  
                  <div className="contact-details">
                    <div className="info-item">
                      <div className="info-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="info-content">
                        <h4>Điện thoại</h4>
                        <a href="tel:470-601-1911">02623.812394</a>
                      </div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="info-content">
                        <h4>Email</h4>
                        <a href="mailto:info@example.com">bamepharm@yahoo.com</a>
                      </div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="info-content">
                        <h4>Địa chỉ</h4>
                        <p>9A Hùng Vương, Phường Tự An, Tp. Buôn Ma Thuột, Tỉnh Đắk Lắk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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