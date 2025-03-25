import React from "react";
import "../css/tintuc.css"; // Import CSS đúng cách

function TinTuc() {
  return (
    <div className="trang-chu">
      <div className="container">
        <div className="main-content">
          <h2>Konten Utama</h2>
          <a href="#">
            <div className="article">
              <img
                src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Berita 1"
              />
              <div className="text">
                <h3>
                  Kecerdasan Buatan dalam Industri Pariwisata: Meningkatkan Pengalaman Wisatawan
                </h3>
                <p>
                  Kecerdasan buatan (AI) semakin banyak digunakan untuk meningkatkan pengalaman wisatawan di seluruh dunia...
                </p>
              </div>
            </div>
          </a>

          {/* Artikel 2 */}
          <a href="#">
            <div className="article">
              <img
                src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Berita 2"
              />
              <div className="text">
                <h3>Destinasi Wisata Terpopuler Tahun 2025: Menyambut Era Baru Pariwisata</h3>
                <p>
                  Wisata global telah berkembang pesat seiring dengan meningkatnya kemudahan akses informasi dan transportasi...
                </p>
              </div>
            </div>
          </a>

          {/* Artikel 3 */}
          <a href="#">
            <div className="article">
              <img
                src="https://images.unsplash.com/photo-1517832349388-a54430ac9af0?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Berita 3"
              />
              <div className="text">
                <h3>Revolusi Teknologi 5G: Dampaknya pada Kehidupan Sehari-hari</h3>
                <p>
                  Teknologi 5G mulai mengubah cara kita berkomunikasi, bekerja, dan berinteraksi dengan dunia sekitar...
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <h2>SideBar</h2>

          {/* Iklan 1 */}
          <div className="ad">
            <h3>Iklan 1</h3>
            <img
              src="https://images.unsplash.com/photo-1685967836529-b0e8d6938227?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Iklan 1"
            />
          </div>

          {/* Iklan 2 */}
          <div className="ad">
            <h3>Iklan 2</h3>
            <img
              src="https://images.unsplash.com/photo-1640622332810-039ad9c96409?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Iklan 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TinTuc;
