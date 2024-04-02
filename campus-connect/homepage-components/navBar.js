import React from 'react';
import './navBar.css';

const NavBar = ({ onSearch }) => {
    return (
        <nav className="navbar">
            <div className="search-bar">
                <input type="text" placeholder="Search..." onKeyPress={onSearch} />
            </div>
            <div className="nav-links">
                <a href="/home">Home</a>
                <a href="/topics">Topics</a>
                <a href="/ask">Ask a Question</a>
                <a href="/profile">Profile</a>
                <a href="/help">Help</a>
            </div>
        </nav>
    );
};

export default NavBar;
