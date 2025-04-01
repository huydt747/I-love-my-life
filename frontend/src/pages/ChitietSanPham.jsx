import React, { useState } from 'react';
import '../css/ChitietSanPham.css';

const ChitietSanPham = () => {
  // State for filters
  const [selectedUserTypes, setSelectedUserTypes] = useState(['Tất cả']);
  const [priceRange, setPriceRange] = useState('Tất cả');
  const [skinType, setSkinType] = useState('Tất cả');
  const [sortBy, setSortBy] = useState('Bán chạy');

  // Filter options
  const userTypes = [
    'Tất cả',
    'Phụ nữ sau sinh',
    'Trẻ em',
    'Phụ nữ có thai',
    'Trẻ sơ sinh'
  ];

  const priceRanges = [
    'Tất cả',
    'Dưới 100.000đ',
    '100.000đ đến 300.000đ',
    '300.000đ đến 500.000đ'
  ];

  const skinTypes = [
    'Tất cả',
    'Da khô',
    'Da mụn',
    'Mọi loại da'
  ];

  const sortOptions = [
    'Bán chạy',
    'Giá thấp',
    'Giá cao'
  ];

  // Product data with additional filter properties
  const productsData = [
    {
      id: 1,
      discount: '15%',
      name: 'Gel làm mờ sẹo Fixderma Sears 7ml do mụn, bóng, rạn da, vết thương',
      currentPrice: '141.100đ',
      originalPrice: '166.600đ',
      priceValue: 141100,
      unit: 'Tuýp x 7ml',
      technology: 'Công nghệ: Vaseline ROSY LOTUS® (Vaseline)',
      image: 'https://via.placeholder.com/150x150?text=Fixderma',
      userTypes: ['Tất cả', 'Phụ nữ sau sinh', 'Phụ nữ có thai'],
      skinType: 'Mọi loại da',
      popularity: 5
    },
    {
      id: 2,
      name: 'Sáp dưỡng ấm Vaseline Rosy Lotus Fobelife làm mềm do làm dịu do khí bị',
      currentPrice: '325.000đ',
      priceValue: 325000,
      unit: 'Hộp',
      variants: ['CESARIN', 'CESARIN'],
      image: 'https://via.placeholder.com/150x150?text=Vaseline',
      userTypes: ['Tất cả', 'Trẻ em', 'Trẻ sơ sinh'],
      skinType: 'Da khô',
      popularity: 3
    },
    {
      id: 3,
      name: 'Kem thea Lancopharm Atopic Derma Cream 50g dùng cho người bị váy né...',
      currentPrice: '325.000đ',
      priceValue: 325000,
      unit: 'Hộp',
      image: 'https://via.placeholder.com/150x150?text=Lancopharm',
      userTypes: ['Tất cả', 'Phụ nữ sau sinh'],
      skinType: 'Da mụn',
      popularity: 4
    },
    {
      id: 4,
      name: 'Kem thea da Tiacortisol dưỡng ấm, làm mềm dịu vùng da bị khô, nhờn (8g)',
      currentPrice: '12.000đ',
      priceValue: 12000,
      unit: 'Hộp x 8g',
      image: 'https://via.placeholder.com/150x150?text=Tiacortisol',
      userTypes: ['Tất cả', 'Trẻ em'],
      skinType: 'Da khô',
      popularity: 2
    },
  ];

  // Toggle user type selection
  const toggleUserType = (type) => {
    if (type === 'Tất cả') {
      setSelectedUserTypes(['Tất cả']);
    } else {
      if (selectedUserTypes.includes('Tất cả')) {
        setSelectedUserTypes([type]);
      } else if (selectedUserTypes.includes(type)) {
        setSelectedUserTypes(selectedUserTypes.filter(t => t !== type));
      } else {
        setSelectedUserTypes([...selectedUserTypes, type]);
      }
    }
  };

  // Filter products based on selected filters
  const filterProducts = () => {
    return productsData.filter(product => {
      // Filter by user type
      const userTypeMatch = selectedUserTypes.includes('Tất cả') || 
        product.userTypes.some(type => selectedUserTypes.includes(type));
      
      // Filter by price range
      let priceMatch = true;
      if (priceRange === 'Dưới 100.000đ') {
        priceMatch = product.priceValue < 100000;
      } else if (priceRange === '100.000đ đến 300.000đ') {
        priceMatch = product.priceValue >= 100000 && product.priceValue <= 300000;
      } else if (priceRange === '300.000đ đến 500.000đ') {
        priceMatch = product.priceValue >= 300000 && product.priceValue <= 500000;
      }
      
      // Filter by skin type
      const skinTypeMatch = skinType === 'Tất cả' || product.skinType === skinType;
      
      return userTypeMatch && priceMatch && skinTypeMatch;
    });
  };

  // Sort products based on selected sort option
  const sortProducts = (products) => {
    switch (sortBy) {
      case 'Giá thấp':
        return [...products].sort((a, b) => a.priceValue - b.priceValue);
      case 'Giá cao':
        return [...products].sort((a, b) => b.priceValue - a.priceValue);
      case 'Bán chạy':
      default:
        return [...products].sort((a, b) => b.popularity - a.popularity);
    }
  };

  // Get filtered and sorted products
  const filteredProducts = sortProducts(filterProducts());

  return (
    <div className="product-page">
      <div className="page-container">
        {/* Sidebar Filter */}
        <aside className="sidebar-filter">
          <h2 className="filter-title">Bộ lọc nâng cao</h2>
          
          <div className="filter-section">
            <h3 className="filter-subtitle">Đối tượng sử dụng</h3>
            <div className="filter-options">
              {userTypes.map(type => (
                <div 
                  key={type}
                  className={`filter-option ${selectedUserTypes.includes(type) ? 'active' : ''}`}
                  onClick={() => toggleUserType(type)}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3 className="filter-subtitle">Giá bán</h3>
            <div className="filter-options">
              {priceRanges.map(range => (
                <div 
                  key={range}
                  className={`filter-option ${priceRange === range ? 'active' : ''}`}
                  onClick={() => setPriceRange(range)}
                >
                  {range}
                </div>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3 className="filter-subtitle">Loại da</h3>
            <div className="filter-options">
              {skinTypes.map(type => (
                <div 
                  key={type}
                  className={`filter-option ${skinType === type ? 'active' : ''}`}
                  onClick={() => setSkinType(type)}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="sort-section">
            <span className="sort-label">Sắp xếp theo:</span>
            <div className="sort-options">
              {sortOptions.map(option => (
                <div 
                  key={option}
                  className={`sort-option ${sortBy === option ? 'active' : ''}`}
                  onClick={() => setSortBy(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                    {product.discount && <div className="discount-badge">{product.discount}</div>}
                  </div>
                  
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    
                    {product.currentPrice && (
                      <div className="price-section">
                        <span className="current-price">{product.currentPrice}</span>
                        {product.originalPrice && (
                          <span className="original-price">{product.originalPrice}</span>
                        )}
                        <span className="unit"> / {product.unit}</span>
                      </div>
                    )}
                    
                    {product.description && (
                      <p className="product-description">{product.description}</p>
                    )}
                    
                    {product.technology && (
                      <div className="product-tech">
                        {product.technology}
                      </div>
                    )}
                    
                    <div className="action-section">
                      {product.variants ? (
                        <div className="variant-selector">
                          <select className="variant-dropdown">
                            {product.variants.map((variant, index) => (
                              <option key={index} value={variant}>{variant}</option>
                            ))}
                          </select>
                          <button className="buy-button">Chọn mua</button>
                        </div>
                      ) : (
                        <button className="buy-button">Chọn mua</button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>Không tìm thấy sản phẩm phù hợp với bộ lọc</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChitietSanPham;