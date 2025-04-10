import React, { useState } from "react";
import '../css/distributionsystem.css';

const branches = {
  "TRỤ SỞ CHÍNH": {
    address: "27 Nguyễn Chí Thanh, Phường 9, TP. Trà Vinh, Tỉnh Trà Vinh",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841855038128!2d106.3427243152607!3d9.934696792900317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTYnMDQuOSJOIDEwNsKwMjAnNDMuMyJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s",
  },
  "HÀ NỘI": {
    address: "Hà Nội",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096968669424!2d105.83964531540245!3d21.0278164859985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b6ca21a0e!2sHanoi!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s",
  },      
  "THANH HÓA": {
    address: "Thanh Hóa",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.923834035577!2d105.7742133153875!3d16.0670585888885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139b4c9e7d5f5b5%3A0x57e3a9d9f5a5a5a5!2sThanh%20Hoa!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s",
  },
};

const DistributionSystem = () => {
  const [selectedBranch, setSelectedBranch] = useState("TRỤ SỞ CHÍNH");

  const handleBranchClick = (branchName) => {
    setSelectedBranch(branchName);
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold text-center mb-6">
        HỆ THỐNG PHÂN PHỐI
      </h1>
      <div className="mb-8 p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">TRỤ SỞ CHÍNH</h2>
        <p className="mb-1">
          <strong>CÔNG TY CỔ PHẦN DƯỢC PHẨM TYPHAIRM</strong>
        </p>
        <p className="mb-1">
          Địa chỉ: 27 Nguyễn Chí Thanh, Phường 9, TP. Trà Vinh, Tỉnh Trà Vinh
        </p>
        <p className="mb-1">Điện thoại: 1900 636 684</p>
        <p className="mb-1">Email: info@hopham.vn</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">CHI NHÁNH</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.keys(branches)
            .filter((b) => b !== "TRỤ SỖ CHÍNH")
            .map((branch) => (
              <button
                key={branch}
                onClick={() => handleBranchClick(branch)}
                className={`p-3 border rounded-lg text-center hover:bg-gray-100 ${
                  selectedBranch === branch
                    ? "bg-blue-100 border-blue-500"
                    : ""
                }`}
              >
                {branch}
              </button>
            ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">
          {selectedBranch}: {branches[selectedBranch].address}
        </h3>
        <div className="w-full h-96">
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
  );
};

export default DistributionSystem;