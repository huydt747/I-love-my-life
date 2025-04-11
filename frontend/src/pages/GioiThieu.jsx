import React from "react";
import { motion } from "framer-motion";
import "../css/gioithieu.css";

const timelineData = [
  {
    date: "14/04/1976",
    content:
      "CÔNG TY CỔ PHẦN DƯỢC - VẬT TƯ Y TẾ ĐẮK LẮK (gọi tắt là BAMEPHARM) được thành lập ngày 14/04/1976 theo quyết định số 28/QĐ-TC của Ủy ban nhân dân cách mạng tỉnh Đắk Lắk với tên gọi là Công ty dược phẩm Đắk Lắk.",
  },
  {
    date: "02/08/1982",
    content:
      "Ngày 02/08/1982 đổi tên thành Xí nghiệp liên hợp dược Đắk Lắk theo quyết định số 358/QĐ-UB của Ủy ban nhân dân tỉnh Đắk Lắk trên cơ sở sáp nhập Công ty dược phẩm và Xưởng sản xuất dược tại địa phương.",
  },
  {
    date: "21/12/1992",
    content:
      "Ngày 21/12/1992 đổi tên thành Công ty Dược-Vật tư y tế Đắk Lắk theo quyết định số 860/QĐ-UB của Ủy ban nhân dân tỉnh Đắk Lắk trên cơ sở sáp nhập Xí nghiệp liên hợp dược Đắk Lắk và các Công ty dược cấp II trên địa bàn tỉnh.",
  },
  {
    date: "03/12/2003",
    content:
      "Thực hiện chủ trương của Chính phủ về việc chuyển doanh nghiệp Nhà nước thành công ty cổ phần, Công ty cổ phần hóa thành CÔNG TY CỔ PHẦN DƯỢC-VẬT TƯ Y TẾ ĐẮK LẮK tại quyết định số 3849/QĐ-UB ngày 03/12/2003 của UBND tỉnh Đắk Lắk.",
  },
];

const boardMembers = [
  { name: 'Nguyễn Mậu Hoàng Sơn', position: 'Chủ tịch' },
  { name: 'Nguyễn Thị Kim Liên', position: 'Phó Chủ tịch' },
  { name: 'Đinh Trung Kiên', position: 'Thành viên' },
  { name: 'Phan Thành Trinh', position: 'Thành viên' },
  { name: 'Nguyễn Bá Lộc', position: 'Thành viên' }
];

const auditCommittee = [
  { name: 'Nguyễn Văn Thông', position: 'Trưởng ban' },
  { name: 'Trần Văn Lợi', position: 'Thành viên' },
  { name: 'Nguyễn Thị Hồng Anh', position: 'Thành viên' }
];

const ceo = { name: 'Phan Thành Trinh', position: 'Tổng Giám đốc' };

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const GioiThieu = () => {
  return (
    <div className="trang-chu">
      <div className="intro-container">
        <img src="https://daklak.gov.vn/documents/10181/2079739/14-4+trao+BK.jpg" alt="" />
        <h2 className="title-name">Giới thiệu công ty</h2>
        <p className="intro">
          Tên Công ty: <b>CÔNG TY CỔ PHẦN DƯỢC – VẬT TƯ Y TẾ ĐẮK LẮK</b>
          <br />
          Tên giao dịch quốc tế: DAKLAK PHARMACEUTICAL MEDICAL EQUIPMENT JOINT –
          STOCK COMPANY. <br />
          Tên viết tắt: <b>BAMEPHARM</b>
          <br />
          Địa chỉ: 9A Hùng Vương, Phường Tự An, Tp. Buôn Ma Thuột, Tỉnh Đắk Lắk
          <br />
          Điện thoại: 02623.812394 – Fax: 02623.858805 <br />
          Email: bamepharm@yahoo.com
          <br />
          Website: https://www.bamepharm.com.vn <br />
          Mã số thuế: 6000449389 <br />
          Số tài khoản: 5201.211.030.286 tại Ngân hàng nông nghiệp và phát triển nông thôn Tp. Buôn Ma Thuột. <br />
          Tổng Giám đốc: <b>Ths.Bs PHAN THÀNH TRINH</b>
        </p>
        <h2 className="title-name">Ngành nghề kinh doanh</h2>
        <p className="intro">
          Sản xuất thuốc chữa bệnh con người, các sản phẩm thực phẩm dinh dưỡng,
          thuốc có nguồn gốc từ dược liệu. <br />
          Mua bán thuốc, dược phẩm, vắcxin-sinh phẩm, hóa chất các loại và sản
          phẩm thực phẩm dinh dưỡng.
          <br />
          Mua bán thiết bị quang học, thiết bị y tế, nha khoa, thiết bị bệnh
          viện.
          <br />
          Dịch vụ sửa chữa, bảo hành máy móc, thiết bị y tế chuyên dụng.
          <br />
          Trồng cây dược liệu, chế biến dược liệu.
          <br />
          Xuất, nhập khẩu thuốc, dược liệu và thiết bị y tế.
        </p>
      
      <div className="timeline-container">
        <h2 className="title-name">Quá Trình Thành Thành & Phát Triển</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-date">{item.date}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

<div className="leadership-section">
  <h2 className="section-title">BAN LÃNH ĐẠO CÔNG TY</h2>
  
  <div className="leadership-board">
    <h3 className="board-title">HỘI ĐỒNG QUẢN TRỊ NHIỆM KỲ 2017-2021</h3>
    <div className="members-grid">
      {boardMembers.map((member, index) => (
        <div key={index} className="member-card">
          <div className="member-avatar">{member.name.charAt(0)}</div>
          <div className="member-info">
            <h4 className="member-name">{member.name}</h4>
            <p className="member-position">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="leadership-board audit-board">
    <h3 className="board-title">BAN KIỂM SOÁT NHIỆM KỲ 2017-2021</h3>
    <div className="members-grid">
      {auditCommittee.map((member, index) => (
        <div key={index} className="member-card">
          <div className="member-avatar">{member.name.charAt(0)}</div>
          <div className="member-info">
            <h4 className="member-name">{member.name}</h4>
            <p className="member-position">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="ceo-card">
    <div className="ceo-avatar">
      <span>{ceo.name.split(' ').map(n => n[0]).join('')}</span>
    </div>
    <div className="ceo-info">
      <h3 className="ceo-name">{ceo.name}</h3>
      <p className="ceo-position">{ceo.position} Điều hành</p>
    </div>
  </div>
</div>
</div>
  );
};

export default GioiThieu;
