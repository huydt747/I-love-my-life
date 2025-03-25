import React from "react";
import "../css/lienhe.css";

function LienHe() {
  return (
    <div className="trang-chu">
    <form action="https://fabform.io/f/xxxxx" method="post">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-details">
              <div className="image-group">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="Contact Us"
                  className="contact-image"
                />
                <h1 className="contact-title">Contact us</h1>
                <div className="contact-info">
                  <div className="info-block">
                    <a href="javascript:;" className="info-item">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG paths omitted for brevity */}
                      </svg>
                      <h5 className="info-text">470-601-1911</h5>
                    </a>
                    <a href="https://veilmail.io/irish-geoff" className="info-item">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG paths omitted for brevity */}
                      </svg>
                      <h5 className="info-text">https://veilmail.io/irish-geoff</h5>
                    </a>
                    <a href="javascript:;" className="info-item">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG paths omitted for brevity */}
                      </svg>
                      <h5 className="info-text">654 Sycamore Avenue, Meadowville, WA 76543</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2 className="form-title">Send Us A Message</h2>
              <input
                type="text"
                className="form-input"
                placeholder="Name"
              />
              <input
                type="text"
                className="form-input"
                placeholder="Email"
              />
              <input
                type="text"
                className="form-input"
                placeholder="Phone"
              />
              <div className="form-preference">
                <h4 className="preference-title">Preferred method of communication</h4>
                <div className="preference-options">
                  <div className="preference-item">
                    <input id="radio-group-1" type="radio" name="radio-group" className="radio-input" />
                    <label htmlFor="radio-group-1" className="preference-label">
                      <span className="radio-circle"></span> Email
                    </label>
                  </div>
                  <div className="preference-item">
                    <input id="radio-group-2" type="radio" name="radio-group" className="radio-input" />
                    <label htmlFor="radio-group-2" className="preference-label">
                      <span className="radio-circle"></span> Phone
                    </label>
                  </div>
                </div>
              </div>
              <input
                type="text"
                className="form-input"
                placeholder="Message"
              />
              <button type="submit" className="form-button">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
    </div>
  );
}

export default LienHe;