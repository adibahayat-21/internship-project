import React from 'react';
// import './GallerySection.css';
import galleryBig from '../assets/Images/galleryBig.png';
import gallerys1 from '../assets/Images/gallerys1.png';
import gallerys2 from '../assets/Images/gallerys2.png';
import gallerys3 from '../assets/Images/gallerys3.png';
import gallerys4 from '../assets/Images/gallerys4.png';
import gallerys5 from '../assets/Images/gallerys5.png';
import gallerys0 from '../assets/Images/Rectangle 55.png';
import bckgr from '../assets/Images/bckgr2.jpeg'

function GallerySection({ shortMsg }) {
  return (
    <section className="gallery-section" style={{
      backgroundImage: `url(${bckgr})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="gallery-container">
        
        {/* ================= MAIN IMAGE AREA ================= */}
        <div className="gallery-main-wrapper">
          <img src={galleryBig} alt="Main Gallery" className="main-image" />
          
          {/* Top Profile Overlay (As seen in screenshot) */}
          <div className="main-top-overlay">
            <div className="profile-pic-dummy"></div> {/* Aap yahan actual small image laga sakte hain */}
            <div className="profile-info">
              <span className="profile-name">Cameron Williamson</span>
              <span className="profile-handle">@cameronwilliamson_01</span>
            </div>
          </div>

          {/* Bottom Glass Overlay with icons */}
          <div className="main-bottom-overlay">
            <p className="glass-text">
              Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.
            </p>
            <div className="glass-icons">
              <span>❤️ 26</span>
              <span>💬 03</span>
              <span>🚀</span>
            </div>
          </div>
        </div>

        {/* ================= THUMBNAILS ROW ================= */}
        <div className="gallery-row-wrapper">
          <div className="gallery-thumbnails">
            <img src={gallerys0} alt="img" />
            <img src={gallerys1} alt="img" />
            <img src={gallerys2} alt="img" />
            <img src={gallerys3} alt="img" />
            <img src={gallerys4} alt="img" />
            {/* 6th image half visible as per screenshot */}
            <img src={gallerys5} alt="img" className="half-visible" /> 
          </div>
          <div className="view-all-container">
            <span className="view-all-text">View all &gt;</span>
          </div>
        </div>

        {/* ================= SHORT MESSAGE AREA ================= */}
        <div className="short-message-container">
          <h2>SHORT MESSAGE</h2>
          <p>{shortMsg || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis"}</p>
          <h4>Thank you ! Visit Again</h4>
        </div>

      </div>
    </section>
  );
}

export default GallerySection;