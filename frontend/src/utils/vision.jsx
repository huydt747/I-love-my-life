import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/vision.css';

const visionItems = [
  {
    title: "TẦM NHÌN",
    content:
      "Nội dung chi tiết về tầm nhìn của công ty. Chúng tôi hướng tới trở thành đơn vị hàng đầu trong lĩnh vực.",
    readMoreLink: "/tam-nhin",
  },
  {
    title: "SỨ MỆNH",
    content:
      "Sứ mệnh của chúng tôi là mang lại giá trị bền vững cho khách hàng và cộng đồng.",
    readMoreLink: "/su-menh",
  },
  {
    title: "HÀNH TRÌNH",
    content:
      "Hành trình phát triển từ những ngày đầu thành lập cho đến hiện tại.",
    readMoreLink: "/hanh-trinh",
  },
  {
    title: "PHÁT TRIỂN",
    content: "Các mốc phát triển quan trọng và định hướng trong tương lai.",
    readMoreLink: "/phat-trien",
  },
  {
    title: "THÀNH TỰU",
    content: "Những thành tựu nổi bật mà chúng tôi đã đạt được.",
    readMoreLink: "/thanh-tuu",
  },
  {
    title: "NHÂN SỰ",
    content: "Đội ngũ nhân sự chuyên nghiệp, tận tâm với nghề.",
    readMoreLink: "/nhan-su",
  },
  {
    title: "VĂN HOÁ",
    content: "Văn hóa doanh nghiệp và các giá trị cốt lõi.",
    readMoreLink: "/van-hoa",
  },
  {
    title: "NHÀ MÁY",
    content: "Hệ thống nhà máy hiện đại đạt chuẩn quốc tế.",
    readMoreLink: "/nha-may",
  },
];

const VisionSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="vision-section">
      <h2 className="section-heading">GIỚI THIỆU</h2>
      <div className="vision-grid">
        {visionItems.map((item, index) => (
          <div
            key={`vision-item-${index}`}
            className={`vision-card ${hoveredItem === index ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link to={item.readMoreLink} className="vision-link">
              <div className="vision-icon">{item.icon}</div>
              <h3 className="vision-title">{item.title}</h3>
              {hoveredItem === index && (
                <div className="vision-hover-content">
                  <p className="vision-description">{item.content}</p>
                  <span className="vision-tooltip">Nhấp để xem chi tiết</span>
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionSection;