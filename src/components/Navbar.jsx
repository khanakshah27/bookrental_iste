import React from 'react';
import './Navbar.css';
import logo from './logo.png'; 

const Navbar=()=> {
  return (
    <div className="navbar">

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href=" ">Home</a></li>
        <li><a href=" ">Books</a></li>
        <li><a href=" ">Notes</a></li>
        <li><a href="">Rentals</a></li>
        <li><a href="">FAQs</a></li>
      </ul>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Find Notes/Books" />
        <button>Search</button>
      </div>

      <div className="logo">
        <img src={logo} alt="Logo" />
        <a className="website-title">Book Rental/Notes Finder</a>
    </div>
    
    </div>

    
  );
}

export default Navbar;
