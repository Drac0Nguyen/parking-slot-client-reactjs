import React, { useState } from 'react';
import './header.css';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    console.log('Before toggle:', menuVisible);
    setMenuVisible(!menuVisible);
    console.log('After toggle:', menuVisible);
  };

  return (
    <header className="header">
      <div className="left">
        <h1>Parking Slot System</h1>
      </div>
      <div className="right">
        <button className="menu-button" onClick={toggleMenu}>
          <img className="avatar" src={require("../../resouses/no-avatar-user.png")} alt="User Avatar" />
        </button>
        {menuVisible && (
          <div className="dropdown-menu">
            <ul>
              <li>Thông tin người dùng</li>
              <li>Chỗ đã đặt</li>
              <li>Thoát</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
