import React, { Component } from 'react';

// Import Arrow Icon
import ArrowDown from '../assets/images/arrow-down.png';

class Navbar extends Component {
  constructor(props) {
    super();

    this.state = {
      showMenu: false
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="search col-xs-12">
            <input className="col-xs-12 search-input" placeholder="Cari Cerita?" />
          </div>
          <div className="col-xs-12">
            <ul className="navbar-item">
              <li><a style={{ fontWeight: "bold", color: "#ff4018" }} href="#">Buat Berita</a></li>
              <li><a href="#">Cerita Culture</a></li>
              <li><a href="#">Events</a></li>
              <li>
                <div style={{position: 'relative'}}>
                  <span className="notif" />
                  <button className="menu" onClick={this.showMenu}>HCM Admin <img style={{ width: 10 }} src={ArrowDown} /></button>
                </div>
                {
                  this.state.showMenu ? (
                    <React.Fragment>
                      <div className="menu-drop-down">
                        <ul>
                          <li><a href="#">HCM Profile</a></li>
                          <li><a href="#">Dashboard Konten</a></li>
                          <li><a href="#">Editorial Konten <span className="notif-text">4</span></a></li>
                          <li><a href="#">Pelaporan</a></li>
                          <li><a href="#">Evaluasi</a></li>
                        </ul>
                      </div>
                    </React.Fragment>
                  ) : (null)
                }
              </li>
            </ul>
            {/* Menu Items */}
          </div>

        </div>
      </div>
    );
  }
}

export default Navbar;