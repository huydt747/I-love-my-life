import React, { useState } from "react";
import "../css/cuahang.css";
import '../css/TrangChu.css';

function CuaHang() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "allergy", name: "Thuốc dị ứng", count: 141 },
    { id: "patch", name: "Miếng dán, cao xoa, dầu", count: 55 },
    { id: "cancer", name: "Thuốc ung thư", count: 132 },
    { id: "antibiotic", name: "Thuốc kháng sinh, kháng nấm", count: 551 },
    { id: "injection", name: "Thuốc tiêm chích & dịch truyền", count: 144 },
    { id: "urology", name: "Thuốc tiết niệu - sinh dục", count: 240 },
    { id: "detox", name: "Thuốc giải độc, khử độc và hỗ trợ cai nghiện", count: 7 },
    { id: "bone", name: "Cơ - xương - khớp", count: 173 },
    { id: "pain", name: "Thuốc giảm đau, hạ sốt, kháng viêm", count: 378 },
    { id: "ent", name: "Thuốc Mắt, Tai, Mũi, Họng", count: 231 },
    { id: "digestive", name: "Thuốc tiêu hóa & gan mật", count: 653 },
    { id: "topical", name: "Thuốc dùng bôi", count: 2 },
    { id: "dermatology", name: "Thuốc da liễu", count: 280 },
    { id: "vitamin", name: "Thuốc bổ & vitamin", count: 284 },
    { id: "respiratory", name: "Thuốc hô hấp", count: 314 },
    { id: "neurology", name: "Thuốc hệ thần kinh", count: 315 },
    { id: "cardiology", name: "Thuốc tim mạch & máu", count: 834 },
    { id: "diabetes", name: "Thuốc trị tiểu đường", count: 181 },
  ];

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="trangchu">
      <div className="cua-hang-container">
      <h2 className="title-name">CỬA HÀNG</h2>
        <div className="cua-hang-search">
          <div className="cua-hang-search-box">
            <input
              type="text"
              placeholder="Nhập tên thuốc, dược chất, dược liệu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="cua-hang-filter">
            <div className="cua-hang-filter-title">Tất cả</div>
            <div className="cua-hang-radio-group">
              <label>
                <input
                  type="radio"
                  name="categoryType"
                  value="drug"
                  checked={selectedCategory === "drug"}
                  onChange={() => setSelectedCategory("drug")}
                />
                Thuốc
              </label>
              <label>
                <input
                  type="radio"
                  name="categoryType"
                  value="substance"
                  checked={selectedCategory === "substance"}
                  onChange={() => setSelectedCategory("substance")}
                />
                Dược chất
              </label>
              <label>
                <input
                  type="radio"
                  name="categoryType"
                  value="herb"
                  checked={selectedCategory === "herb"}
                  onChange={() => setSelectedCategory("herb")}
                />
                Dược liệu
              </label>
            </div>
          </div>
        </div>

        <div className="cua-hang-categories">
          <h2>Thuốc theo nhóm trị liệu</h2>
          <div className="cua-hang-grid">
            {filteredCategories.map((category) => (
              <div key={category.id} className="cua-hang-card">
                <h3>{category.name}</h3>
                <p>{category.count} sản phẩm</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CuaHang;