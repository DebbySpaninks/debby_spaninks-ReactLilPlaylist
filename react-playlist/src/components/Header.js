import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="header">
            <h1>React Playlist</h1>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <p></p>
        </div>
    );
}

export default Header