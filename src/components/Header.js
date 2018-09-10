import React from 'react';

// Images
import TelkomLogo from '../assets/images/telkom.png';
import BoyUser from '../assets/images/user.svg';

const Header = (props) => (
  <div className="header">
    <img className="header-logo" src={TelkomLogo} />
    <div className="header-info">
      <div className="user-info">
        <img src={BoyUser} />
        <a href='#'>Edit</a>
      </div>
      <div className="header-info-content">
        <h1>HCM Telkom Indonesia</h1>
        <p>
          Integer quis gravida massa, a gravida risus. Donec imperdiet laoreet volutpat. Donec congue tempus orci, in semper nisi varius sit amet. Suspendisse lorem mi.
        </p>
      </div>
    </div>
  </div>
);

export default Header;