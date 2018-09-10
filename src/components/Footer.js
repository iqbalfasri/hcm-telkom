import React from 'react';

// Social Icon
import Facebook from '../assets/images/facebook-logo.png';
import Twitter from '../assets/images/twitter-logo.png';
import Instagram from '../assets/images/instagram-logo.png';

const Footer = props => (
  <div className="footer">
    <div className="container">
      <div className="footer-content row d-flex flex-row justify-content-between">
        <div className="footer-site-info">
          <h1>Telkom Inspire</h1>
          <p>by Telkom Indonesia</p>
        </div>
        <div className="footer-site-info">
          <a href="#">Syarat & Kententuan</a>
          <a href="#">Kontak Kami</a>
          <a href="#">Tentang Kami</a>
        </div>
        <div className="social">
          <a href=""><img src={Facebook}/></a>
          <a href=""><img src={Twitter}/></a>
          <a href=""><img src={Instagram}/></a>
        </div>
      </div>
    </div>
    <h3>2018 PT TELEKOMUNIKASI INDONESIA (Persero) Tbk. All Right reserved.</h3>
  </div>
);

export default Footer;