import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      {/* display link in header */}
      <div className="link-header">
        <Link to="/" className="link"> Home </Link>
        <Link to="/about" className="link"> About </Link>
      </div>
      <h1>React Playlist</h1>
    </div>
  );
}

export default Header