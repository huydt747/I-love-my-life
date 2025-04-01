import React, { useEffect } from 'react';
import '../css/chitiettintuc.css';

const ChitietTinTuc = () => {
  // Các hiệu ứng scroll và fade-in giữ nguyên như cũ
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => fadeObserver.observe(element));
    return () => fadeElements.forEach(element => fadeObserver.unobserve(element));
  }, []);

  return (
    <div className="chitiettintuc">
      <div className="news-detail-container">
        <main className="news-content">
          <article>
            <header className="article-header">
              <h1>WHO Phê Duyệt Vắc-xin Sốt Xuất Huyết Đầu Tiên Cho Trẻ Em Tại Châu Á</h1>
              <p className="article-subtitle">Vắc-xin Qdenga của Takeda được chấp thuận sau thử nghiệm lâm sàng trên 28.000 trẻ, mở ra kỷ nguyên mới phòng bệnh sốt xuất huyết</p>
            </header>
            
            <div className="article-image-container fade-in">
              <img 
                className="article-image" 
                src="https://officesnapshots.com/wp-content/uploads/2021/08/takeda-offices-bueno-aires-11.jpg" 
                alt="Vắc-xin sốt xuất huyết Qdenga"
              />
              <div className="image-caption">Vắc-xin Qdenga - bước đột phá trong phòng chống sốt xuất huyết. Ảnh: Takeda Pharmaceuticals</div>
            </div>
            
            <div className="article-content">
              <p>Tổ chức Y tế Thế giới (WHO) vừa chính thức phê duyệt vắc-xin Qdenga (TAK-003) của hãng dược Takeda cho trẻ em từ 6-16 tuổi tại các khu vực có dịch sốt xuất huyết lưu hành, bao gồm nhiều nước Đông Nam Á.</p>
              
              <p>Đây là vắc-xin thứ hai được phê duyệt toàn cầu cho bệnh sốt xuất huyết, nhưng là loại đầu tiên không yêu cầu xét nghiệm trước khi tiêm. Kết quả thử nghiệm giai đoạn 3 cho thấy hiệu quả bảo vệ 80,2% chống lại bệnh có triệu chứng và 90,4% chống lại nhập viện.</p>
              
              <blockquote>
                "Qdenga đại diện cho công cụ phòng ngừa mang tính cách mạng, đặc biệt tại các quốc gia có gánh nặng bệnh nặng nề như Việt Nam, Philippines và Indonesia. Chúng tôi ước tính có thể ngăn ngừa 14.000 ca nhập viện mỗi năm tại Đông Nam Á"
                <footer>— TS. Raman Velayudhan, Trưởng nhóm WHO về bệnh sốt xuất huyết</footer>
              </blockquote>
              
              <p>Vắc-xin hoạt động dựa trên virus sốt xuất huyết type 2 đã làm yếu, tạo miễn dịch chéo với cả 4 type virus. Lịch tiêm gồm 2 mũi cách nhau 3 tháng, bảo vệ kéo dài ít nhất 4,5 năm theo dữ liệu nghiên cứu.</p>
              
              <p>Tại Việt Nam, Bộ Y tế đang xem xét đưa Qdenga vào Chương trình Tiêm chủng mở rộng sau khi hoàn tất đánh giá hiệu quả-chi phí. Sốt xuất huyết ghi nhận hơn 300.000 ca mắc và 100 ca tử vong hàng năm tại nước ta.</p>
              
              <p>Các chuyên gia khuyến cáo vắc-xin cần được sử dụng kết hợp với các biện pháp kiểm soát muỗi truyền thống. Dự kiến giá bán khoảng 50 USD/mũi tại thị trường tư nhân.</p>
            </div>

            <section className="related-news">
              <h2 className="section-title">Tin Liên Quan</h2>
              <div className="news-grid">
                <div className="news-card fade-in">
                  <div className="card-image-container">
                    <img 
                      className="card-image" 
                      src="https://img.freepik.com/free-photo/medical-research-lab_23-2148950279.jpg" 
                      alt="Nghiên cứu thuốc kháng virus"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Việt Nam Thử Nghiệm Lâm Sàng Thuốc Kháng Virus Nội Địa</h3>
                    <p className="card-text">Thuốc Molravin do VinBioCare phát triển cho kết quả khả quan trong điều trị sốt xuất huyết thể nặng.</p>
                    <a href="#" className="read-more">Xem thêm →</a>
                  </div>
                </div>
                
                <div className="news-card fade-in">
                  <div className="card-image-container">
                    <img 
                      className="card-image" 
                      src="https://img.freepik.com/free-photo/healthcare-workers_23-2148857933.jpg" 
                      alt="Chiến dịch phòng chống sốt xuất huyết"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Bộ Y Tế Phát Động Chiến Dịch "Không Lăng Quăng" 2023</h3>
                    <p className="card-text">Tập trung kiểm soát dịch tại 20 tỉnh thành có tỷ lệ mắc sốt xuất huyết cao nhất.</p>
                    <a href="#" className="read-more">Xem thêm →</a>
                  </div>
                </div>
                
                <div className="news-card fade-in">
                  <div className="card-image-container">
                    <img 
                      className="card-image" 
                      src="https://img.freepik.com/free-photo/virus-microscope_23-2148483835.jpg" 
                      alt="Chủng virus sốt xuất huyết mới"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Phát Hiện Chủng Virus Sốt Xuất Huyết Genotype Mới Tại ĐBSCL</h3>
                    <p className="card-text">Chủng DENV-2-C1 có khả năng lây lan nhanh, đang được giám sát đặc biệt.</p>
                    <a href="#" className="read-more">Xem thêm →</a>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>
        
        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-header">Tin Nổi Bật</div>
            <div className="sidebar-content">
              <ul className="trending-list">
                <li className="trending-item">
                  <a href="#" className="trending-link">
                    <span className="trending-number">1</span>
                    <span>Việt Nam sản xuất thành công thuốc điều trị đái tháo đường thế hệ mới</span>
                  </a>
                </li>
                <li className="trending-item">
                  <a href="#" className="trending-link">
                    <span className="trending-number">2</span>
                    <span>Bộ Y tế cảnh báo tình trạng kháng kháng sinh gia tăng</span>
                  </a>
                </li>
                <li className="trending-item">
                  <a href="#" className="trending-link">
                    <span className="trending-number">3</span>
                    <span>Ra mắt ứng dụng theo dõi tương tác thuốc đầu tiên tại Việt Nam</span>
                  </a>
                </li>
                <li className="trending-item">
                  <a href="#" className="trending-link">
                    <span className="trending-number">4</span>
                    <span>Phát hiện hoạt chất mới từ cây dược liệu bản địa có tiềm năng kháng ung thư</span>
                  </a>
                </li>
                <li className="trending-item">
                  <a href="#" className="trending-link">
                    <span className="trending-number">5</span>
                    <span>Hội nghị Dược lâm sàng Châu Á-Thái Bình Dương 2023 tại Hà Nội</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="sidebar-section">
            <div className="sidebar-header">Đăng ký Nhận tin</div>
            <div className="sidebar-content">
              <form className="newsletter-form">
                <input type="email" className="newsletter-input" placeholder="Nhập email của bạn" required />
                <button type="submit" className="newsletter-button">Đăng ký</button>
              </form>
              <p style={{ fontSize: '0.8rem', marginTop: '10px', color: 'var(--text-light)' }}>
                Nhận tin tức y dược mới nhất. Chúng tôi cam kết bảo mật thông tin.
              </p>
            </div>
          </div>
          
          <div className="sidebar-section">
            <div className="sidebar-header">Video Mới</div>
            <div className="sidebar-content">
              <div style={{ 
                background: 'var(--bg-secondary)', 
                aspectRatio: '16/9', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '10px', 
                borderRadius: 'var(--border-radius)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '5px' }}>▶️</div>
                  <div>Cơ chế hoạt động của vắc-xin sốt xuất huyết</div>
                </div>
              </div>
              <div style={{ 
                background: 'var(--bg-secondary)', 
                aspectRatio: '16/9', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: 'var(--border-radius)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '5px' }}>▶️</div>
                  <div>Hướng dẫn sử dụng thuốc hạ sốt đúng cách</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ChitietTinTuc;