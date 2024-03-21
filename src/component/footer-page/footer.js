// Footer.js
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Parking App</p>
      {/* Add any other footer content here */}
    </footer>
  );
}

export default Footer;
