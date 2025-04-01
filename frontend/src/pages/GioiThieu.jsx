import React from "react";
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
    </div>
  );
};

export default GioiThieu;
