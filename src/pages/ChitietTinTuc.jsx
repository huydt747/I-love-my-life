import React, { useEffect } from 'react';
import '../css/chitiettintuc.css';

const ChitietTinTuc = () => {
  // Scroll progress effect
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

  // Intersection observer for fade-in effects
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    fadeElements.forEach(element => {
      fadeObserver.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        fadeObserver.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="chitiettintuc">
  
      {/* Main Content */}
      <div className="news-detail-container">
        <main className="news-content">
          <article>
            <header className="article-header">
              <h1>Major Scientific Breakthrough: Fusion Energy Record Set</h1>
              <p className="article-subtitle">Scientists achieve sustained fusion reaction for record 8 minutes, generating more energy than consumed—potentially revolutionizing global clean energy production.</p>
            </header>
            
            <div className="article-image-container fade-in">
              <img 
                className="article-image" 
                src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect fill='%23005b9f' width='800' height='400'/%3E%3Ctext fill='white' font-family='Arial' font-size='36' x='400' y='200' text-anchor='middle'%3EFusion Reactor Facility%3C/text%3E%3Ccircle cx='400' cy='200' r='80' fill='none' stroke='%2300ffff' stroke-width='20' opacity='0.8'%3E%3C/circle%3E%3Ccircle cx='400' cy='200' r='40' fill='%23ffffff' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;1;0.6' dur='3s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/svg%3E" 
                alt="Fusion Reactor Facility"
              />
              <div className="image-caption">The IERC Fusion Facility where the groundbreaking reaction was achieved. Credit: IERC</div>
            </div>
            
            <div className="article-content">
              <p>Scientists at the International Energy Research Center (IERC) have announced a groundbreaking achievement in fusion energy production, sustaining a reaction for a record 8 minutes and generating more energy than consumed by the system—a milestone that has eluded researchers for decades.</p>
              
              <p>The achievement marks what many experts are calling the most significant advancement in fusion energy since research began in the 1950s. Unlike previous fusion experiments that consumed more energy than they produced, the IERC team's reaction generated approximately 1.5 times the energy input, demonstrating the viability of fusion as a potential commercial power source.</p>
              
              <blockquote>
                "This represents a significant step toward commercial fusion power. While we still have challenges to overcome, this demonstrates that fusion can be a viable energy source for humanity's future. We're witnessing what could be the dawn of a new energy era."
                <footer>— Dr. Elena Morales, Lead Researcher</footer>
              </blockquote>
              
              <p>The breakthrough, which utilized a tokamak design with advanced magnetic confinement techniques, could lead to nearly limitless clean energy production within the next decade, experts say. Unlike traditional nuclear fission, fusion produces minimal radioactive waste and uses fuel derived from water, making it one of the most promising sustainable energy sources.</p>
              
              <p>IERC Director Dr. James Chen explained that the team overcame previous limitations through a combination of new superconducting materials and artificial intelligence-optimized plasma control systems. "The AI was able to predict and correct plasma instabilities in real-time, something human operators simply couldn't achieve with the necessary precision," Chen said.</p>
              
              <p>Global implications of the breakthrough are already being felt, with energy markets showing significant volatility as investors reassess long-term projections for traditional energy sources. Climate scientists have also expressed cautious optimism about fusion's potential to reduce carbon emissions if the technology can be commercialized within the next 15-20 years.</p>
            </div>

            
            <section className="related-news">
              <h2 className="section-title">Related News</h2>
              <div className="news-grid">
                <div className="news-card fade-in">
                  <div className="card-image-container">
                    <img 
                      className="card-image" 
                      src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150'%3E%3Crect fill='%23407855' width='300' height='150'/%3E%3Ctext fill='white' font-family='Arial' font-size='18' x='150' y='75' text-anchor='middle'%3EClimate Summit%3C/text%3E%3Cpath d='M100,100 Q150,40 200,100' stroke='white' stroke-width='2' fill='none'/%3E%3Ccircle cx='150' cy='60' r='20' fill='%23ffdd00'/%3E%3C/svg%3E" 
                      alt="Climate Summit"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Global Climate Summit Scheduled for June</h3>
                    <p className="card-text">World leaders to discuss new emission targets in light of fusion developments and other clean energy breakthroughs.</p>
                    <a href="#" className="read-more">Read more →</a>
                  </div>
                </div>
                
                <div className="news-card fade-in">
                  <div className="card-image-container">
                    <img 
                      className="card-image" 
                      src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150'%3E%3Crect fill='%23444466' width='300' height='150'/%3E%3Ctext fill='white' font-family='Arial' font-size='18' x='150' y='75' text-anchor='middle'%3EStock Market%3C/text%3E%3Cpolyline points='50,100 100,80 150,110 200,60 250,90' stroke='%2300ff00' stroke-width='3' fill='none'/%3E%3C/svg%3E" 
                      alt="Energy Markets"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Energy Markets Respond to Fusion News</h3>
                    <p className="card-text">Stocks in traditional energy sectors show volatility as investors reassess long-term projections.</p>
                    <a href="#" className="read-more">Read more →</a>
                  </div>
                </div>
                
                <div className="news-card fade-in">
                  <div className="card-image-container">
                    <img 
                      className="card-image" 
                      src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150'%3E%3Crect fill='%23553366' width='300' height='150'/%3E%3Ctext fill='white' font-family='Arial' font-size='18' x='150' y='75' text-anchor='middle'%3EFusion Science%3C/text%3E%3Ccircle cx='150' cy='75' r='30' stroke='%23ff00ff' stroke-width='2' fill='none'/%3E%3Ccircle cx='150' cy='75' r='15' fill='%23ff00ff' opacity='0.5'/%3E%3C/svg%3E" 
                      alt="Fusion Science"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">The Science Behind Fusion: Explained</h3>
                    <p className="card-text">How scientists are recreating the power of stars on Earth and why this breakthrough matters.</p>
                    <a href="#" className="read-more">Read more →</a>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>
        
        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-header">Trending Now</div>
            <div className="sidebar-content">
              <ul className="trending-list">
                <li className="trending-item">
                  <a href="#" className="trending-link">
                    <span className="trending-number">1</span>
                    <span>Fusion Energy Breakthrough Promises Clean Power Revolution</span>
                  </a>
                </li>
                <li className="trending-item">
                  <a href="#" className="trending-link">
                    <span className="trending-number">2</span>
                    <span>Global Climate Summit to Address New Energy Landscape</span>
                  </a>
                </li>
                <li className="trending-item">
                  <a href="#" className="trending-link">
                    <span className="trending-number">3</span>
                    <span>Markets Fluctuate Following Energy Technology News</span>
                  </a>
                </li>
                <li className="trending-item">
                  <a href="#" className="trending-link">
                    <span className="trending-number">4</span>
                    <span>AI System Key to Fusion Breakthrough, Scientists Say</span>
                  </a>
                </li>
                <li className="trending-item">
                  <a href="#" className="trending-link">
                    <span className="trending-number">5</span>
                    <span>What Fusion Power Means for Climate Change Goals</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="sidebar-section">
            <div className="sidebar-header">Subscribe to Updates</div>
            <div className="sidebar-content">
              <form className="newsletter-form">
                <input type="email" className="newsletter-input" placeholder="Your email address" required />
                <button type="submit" className="newsletter-button">Subscribe</button>
              </form>
              <p style={{ fontSize: '0.8rem', marginTop: '10px', color: 'var(--text-light)' }}>
                Get the latest news delivered to your inbox. We never share your email.
              </p>
            </div>
          </div>
          
          <div className="sidebar-section">
            <div className="sidebar-header">Latest Videos</div>
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
                  <div>Inside the Fusion Lab: Exclusive Tour</div>
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
                  <div>Expert Analysis: Future of Energy</div>
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