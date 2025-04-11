import React, { useState } from "react";
import "../css/phanphoi.css";

const branches = [
  { name: "Chi nhánh Hà Nội", top: "21%", left: "65%" },
  { name: "Chi nhánh Thanh Hoá", top: "30%", left: "60%" },
  { name: "Chi nhánh Nghệ An", top: "35%", left: "58%" },
  { name: "Chi nhánh Đà Nẵng", top: "47%", left: "63%" },
  { name: "Chi nhánh Khánh Hòa", top: "57%", left: "66%" },
  { name: "Chi nhánh Đắk Lắk", top: "53%", left: "53%" },
  { name: "Chi nhánh Đồng Nai", top: "66%", left: "58%" },
  { name: "Chi nhánh Tp Hồ Chí Minh 1", top: "69%", left: "56%" },
  { name: "Chi nhánh Tp Hồ Chí Minh 2", top: "70%", left: "56.5%" },
  { name: "Chi nhánh Tiền Giang", top: "73%", left: "55%" },
  { name: "Chi nhánh Trà Vinh", top: "75%", left: "59%" },
  { name: "Chi nhánh Cần Thơ", top: "76%", left: "53%" },
  { name: "Chi nhánh An Giang", top: "74%", left: "51%" },
  { name: "Chi nhánh Cà Mau", top: "85%", left: "51%" },
  { name: "Chi nhánh Quảng Ngãi", top: "51%", left: "64%" },
  { name: "Chi nhánh Hải Dương", top: "23%", left: "68%" },
  { name: "Chi nhánh Bình Thuận", top: "65%", left: "61%" },
  { name: "Chi nhánh Bình Dương", top: "68%", left: "57%" },
  { name: "Chi nhánh Gia Lai", top: "50%", left: "55%" },
  { name: "Chi nhánh Vĩnh Long", top: "75%", left: "54%" },
  { name: "Chi nhánh Phú Thọ", top: "19%", left: "63%" }
];

const PhanPhoi = () => {
  const [hoveredBranch, setHoveredBranch] = useState(null);

  return (
    <div className="vietnam-map-container">
      <h2 className="vietnam-map-title">PHÂN PHỐI TRONG NƯỚC</h2>
      <p className="vietnam-map-description">
        Hiện nay, TVPHARM có 01 văn phòng đại diện tại Hà Nội, 21 chi nhánh kinh doanh.
        Sản phẩm được phân phối rộng khắp trên cả nước.
      </p>
      <div className="vietnam-map-content">
        <ul className="vietnam-map-branch-list">
          {branches.map((b, idx) => (
            <li key={idx}>🔶 {b.name}</li>
          ))}
        </ul>
        <div className="vietnam-map-wrapper">
          <img src="https://vemaps.com/uploads/img/vn-07.png" alt="Bản đồ Việt Nam" className="vietnam-map-image" />
          {branches.map((b, idx) => (
            <div
              key={idx}
              className="vietnam-map-marker"
              style={{ top: b.top, left: b.left }}
              onMouseEnter={() => setHoveredBranch(b.name)}
              onMouseLeave={() => setHoveredBranch(null)}
            >
              📍
              {hoveredBranch === b.name && (
                <div className="vietnam-map-tooltip">{b.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhanPhoi;
