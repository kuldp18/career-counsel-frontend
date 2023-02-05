import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import hamburger from '../images/ham.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <nav className="navbar">
        <a href="index.html" className="logo">
          <Link to="/">Consulting</Link>
        </a>
        <div className={`${showLinks ? 'nav-links mobile-menu' : 'nav-links'}`}>
          <ul>
            <li>
              <Link href="index.html" to="/">
                Home
              </Link>
            </li>
            <li>
              <a href="aboutus.html">About Us</a>
            </li>
            <li>
              <a href="education.html">Education</a>
            </li>
            <li>
              <a href="agritech.html">AgriTech</a>
            </li>
            <li>
              <a href="energy.html">Energy</a>
            </li>
            <li>
              <a href="waste.html">Waste-Management</a>
            </li>
            <li>
              <a href="contact.html">Contact us</a>
            </li>
          </ul>
        </div>
        <button id="login-btn" className="btn btn-primary btn-lg">
          <Link
            to="/login"
            style={{
              color: 'white',
            }}
          >
            Login
          </Link>
        </button>
        <button id="register-btn" className="btn btn-primary btn-lg">
          <Link
            to="/register"
            style={{
              color: 'white',
            }}
          >
            Register
          </Link>
        </button>
        <img
          src={hamburger}
          alt="hamburger"
          className="menu-hamburger"
          onClick={() => setShowLinks(!showLinks)}
        />
      </nav>
    </>
  );
};

export default Navbar;
