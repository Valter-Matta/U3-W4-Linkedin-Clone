import React from 'react';
import  "../assets/HomeRightBottom.css"

const HomeRightBottom = () => {
  return (
    <div className="sidebar mt-4 position-sticky">
      <div className="job-ad">
        <div className="job-ad-content">
          <h4>See who’s hiring<br />on LinkedIn.</h4>
          <img
            src="https://via.placeholder.com/300x150"
            alt="Hiring Banner"
            className="ad-image"
          />
        </div>
      </div>
      <div className="suggestion">
        <span className="suggestion-label">SUGGERIMENTO</span>
        <p>Prova LinkedIn sull’app per Windows</p>
      </div>
      <div className="footer">
        <ul>
          <li>Informazioni</li>
          <li>Accessibilità</li>
          <li>Centro assistenza</li>
          <li>Privacy e condizioni ▾</li>
          <li>Opzioni per gli annunci pubblicitari</li>
          <li>Pubblicità</li>
          <li>Servizi alle aziende</li>
        </ul>
        <p>
          LinkedIn Corporation © 2024
        </p>
      </div>
    </div>
  );
};

export default HomeRightBottom;