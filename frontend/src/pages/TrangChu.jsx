import { motion, useAnimation, useInView, AnimatePresence,  } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/trangchu/1.jpeg";
import img2 from "../assets/trangchu/2.jpeg";
import Quote from "../utils/quote";
import Slideshow from "../utils/slideshow";

const branches = {
  "TRỤ SỞ CHÍNH": {
    address: "27 Nguyễn Chí Thanh, Phường 9, TP. Trà Vinh, Tỉnh Trà Vinh",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841855038128!2d106.3427243152607!3d9.934696792900317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTYnMDQuOSJOIDEwNsKwMjAnNDMuMyJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s",
  },
  "HÀ NỘI": {
    address: "Hà Nội branch address",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096968669424!2d105.83964531540245!3d21.0278164859985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b6ca21a0e!2sHanoi!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s",
  },
  "THANH HÓA": {
    address: "Thanh Hóa branch address",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.923834035577!2d105.7742133153875!3d16.0670585888885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139b4c9e7d5f5b5%3A0x57e3a9d9f5a5a5a5!2sThanh%20Hoa!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s",
  },
};

// Danh sách các tab sản phẩm
const tabs = [
  { id: "phariton", name: "Phariton" },
  { id: "travicol", name: "Travicol" },
];

// Ảnh tương ứng với mỗi tab (sử dụng placeholder)
const tabImages = {
  phariton: "https://placehold.co/1200x500",
  travicol: "https://placehold.co/1200x500",
};

const images = [img1, img2];

const activities = [
  {
    id: 1,
    title:
      "TV.PHARM LẦN THỨ 4 ĐƯỢC VINH DANH TOP 10 CÔNG TY SẢN XUẤT DƯỢC PHẨM UỶ TÍN 2024",
    content:
      "Theo công bố mới đây của Công ty Cổ phần Báo cáo Đánh giá Việt Nam (Vietnam Report), TV.PHARM được vinh danh là 1 trong 10 Công ty dược xuất dược phẩm uỷ tín năm 2024. Đây là năm thứ 4 liên tiếp TV.PHARM vinh dự góp mặt trong bảng vinh danh này.",
  },
  {
    id: 2,
    title:
      "TRAVICOL ĐƯỢC VINH DANH TẠI LỄ CÔNG BỐ SẢN PHẨM ĐẠT THƯƠNG HIỆU QUỐC GIA VIỆT NAM 2024",
    content:
      "Tại Lễ Công bố sản phẩm đạt Thương hiệu quốc gia Việt Nam năm 2024 với chủ đề 'Tiến vào kỷ nguyên Xanh' diễn ra tại Trung tâm Hội nghị Quốc gia Việt Nam (vào ngày 4/11), Công ty cổ phần Dược phẩm TV.PHARM với sản phẩm giảm đau hạ sốt Travicol tiếp tục đạt Thương hiệu quốc gia Việt Nam 2024, đánh dấu cột mốc lần thứ 2 liên tiếp được công nhận danh hiệu danh giá này.",
  },
  {
    id: 3,
    title: "HÀNH TRÌNH TV.PHARM 2024 - MỘT NĂM NHÌN LẠI",
    content:
      "Năm 2024 sắp khép lại, 360 ngày đi qua, hành trình vươn xa của TV.PHARM không chỉ chạm đến bao điểm sáng thành công mà còn ghi dấu sự lan tỏa của yêu thương, của thấu cảm và sẻ chia. Hãy cùng TV.PHARM nhìn lại những con số nổi bật, những hoạt động tích cực và thành tích nổi bật năm 2024.",
  },
  {
    id: 4,
    title:
      "TRAVICOL TỰ HÀO TIẾP TỤC ĐƯỢC VINH DANH LÀ THƯƠNG HIỆU QUỐC GIA VIỆT NAM LẦN THỨ 2 LIÊN TIẾP",
    content:
      "Mới đây, Hội đồng Thương hiệu quốc gia Việt Nam đã công bố 190 doanh nghiệp với tổng số 39 sản phẩm đạt Thương hiệu quốc gia Việt Nam năm 2024. Trong đó, nhãn hiệu chủ lực của TV.PHARM - Travicol vinh dự là sản phẩm giảm đau hạ sốt ĐẦU TIÊN và DUY NHẤT hiện nay được công nhận Thương hiệu quốc gia Việt Nam.",
  },
];

// Dữ liệu các mục hiển thị
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

function TrangChu() {
  const [selectedBranch, setSelectedBranch] = useState("TRỤ SỞ CHÍNH");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeTab, setActiveTab] = useState('phariton');
  const [activeIndex, setActiveIndex] = useState(0);
  const bannerItem = activities.find((activity) => activity.id === 3);
  const cardItems = activities.filter((activity) => activity.id !== 3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const handleBranchClick = (branchName) => {
    setSelectedBranch(branchName);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % activities.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activities.length]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="trangchu">
      {/* Hero Section với Slideshow */}
      <section className="hero-section">
        <Slideshow images={images} interval={3000} />
      </section>

      {/* Giới thiệu */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="quote-wrapper">
              <Quote />
            </div>
            <div className="slogan">
              <h2>Vì sức khỏe và sắc đẹp của bạn</h2>
              <p>
                Với hơn 45 năm kinh nghiệm trong ngành dược phẩm, chúng tôi cam
                kết mang đến những sản phẩm chất lượng cao, an toàn và hiệu quả.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="vision-section">
        <h2 className="section-heading">GIỚI THIỆU</h2>
        <div className="vision-grid">
          {visionItems.map((item, index) => (
            <div
              key={`vision-item-${index}`}
              className={`vision-card ${
                hoveredItem === index ? "hovered" : ""
              }`}
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

      {/* gioithieu */}

      <section className="about-section" ref={ref}>
        <div className="about-container">
          <motion.div
            className="about-content"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <h2 className="section-title">VỀ CHÚNG TÔI</h2>
            <div className="about-grid">
              <div className="about-text">
                <p className="philosophy">
                  <span className="quote">
                    Hiện đại trao niềm tin - Chất lượng xây hạnh phúc
                  </span>
                </p>

                <div className="description">
                  <p>
                    TVPHARM (tiền thân là Công ty Dược & Vật tư y tế Trà Vinh)
                    là doanh nghiệp đi đầu sản xuất viên nang mềm hiện đại nhất
                    tại Việt Nam.
                  </p>
                  <p>
                    Đến nay nhà máy không ngừng phát triển và hiện đại hóa dây
                    chuyền sản xuất nên được khách hàng trong và ngoài nước tin
                    nhiệm và tin tưởng...
                  </p>
                  <p>
                    Với đội ngũ nhân viên chuyên nghiệp cùng lực lượng công nhân
                    kỹ thuật có tay nghề cao, trong những năm qua TVPHARM ngày
                    càng tự hoàn thiện và góp phần xây dựng nền tảng sức khỏe
                    của cộng đồng.
                  </p>
                  <p>
                    Mọi công đoạn sản xuất đều được TVPHARM kiểm soát chặt chẽ
                    trong điều kiện tiêu chuẩn tuyệt đối bằng...
                  </p>
                </div>
              </div>

              <motion.div
                className="mission-cards"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                <div className="mission-card">
                  <h3>CHĂM SÓC</h3>
                </div>
                <div className="mission-card">
                  <h3>SỨC KHỎE</h3>
                </div>
                <div className="mission-card">
                  <h3>CỘNG ĐỒNG</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* tabs */}
      <div className="tabs-container">
        <div className="tabs-header">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tabs-button ${
                activeTab === tab.id ? "tabs-button-active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="tabs-content">
          <img
            src={tabImages[activeTab]}
            alt={`${activeTab} product`}
            className="tabs-image"
          />
        </div>
      </div>

      <hr />

      {/* tin tức */}

      <div className="activities-container">
      <h1 className="activities-main-title">HOẠT ĐỘNG TV.PHARM</h1>
      <div className="activities-content">
        {/* Left Banner */}
        {bannerItem && (
          <div className="banner-section">
            <img
              src="https://placehold.co/400x300/red/white?text=TV.PHARM+Chặng+Trình+2024"
              alt="Banner"
              className="banner-image"
            />
            <h3 className="banner-title">{bannerItem.title}</h3>
            <p className="banner-content">{bannerItem.content}</p>
          </div>
        )}

        {/* Right Cards */}
        <div className="cards-section">
          {cardItems.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
              className="activity-card"
            >
              <img
                src={`https://placehold.co/200x150?text=Award+${activity.id}`}
                alt={`Award ${activity.id}`}
                className="card-image"
              />
              <div className="card-text">
                <h3 className="card-title">{activity.title}</h3>
                <p className="card-content">{activity.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* bản đồ */}

    <hr />

    <div className="distribution-system-container">
  <h1 className="title-header">HỆ THỐNG PHÂN PHỐI</h1>

  <div className="headquarters-box">
    <h2 className="map-title">TRỤ SỞ CHÍNH</h2>
    <p className="company-name"><strong>CÔNG TY CỔ PHẦN DƯỢC PHẨM TYPHAIRM</strong></p>
    <p className="company-address">Địa chỉ: 27 Nguyễn Chí Thanh, Phường 9, TP. Trà Vinh, Tỉnh Trà Vinh</p>
    <p className="company-phone">Điện thoại: 1900 636 684</p>
    <p className="company-email">Email: info@hopham.vn</p>
  </div>

  <div className="branch-section">
    <h2 className="map-title">CHI NHÁNH</h2>
    <div className="branch-grid">
      {Object.keys(branches)
        .filter((b) => b !== "TRỤ SỞ CHÍNH")
        .map((branch) => (
          <button
            key={branch}
            onClick={() => handleBranchClick(branch)}
            className={`branch-button ${
              selectedBranch === branch ? "selected-branch" : ""
            }`}
          >
            {branch}
          </button>
        ))}
    </div>
  </div>

  <div className="map-section">
    <h3 className="selected-branch-title">
      {selectedBranch}: {branches[selectedBranch].address}
    </h3>
    <div className="map-container">
      <iframe
        title={`Bản đồ ${selectedBranch}`}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={branches[selectedBranch].mapUrl}
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>
    </div>
  );
}

export default TrangChu;
