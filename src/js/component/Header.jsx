// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active text-white" aria-current="page" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;