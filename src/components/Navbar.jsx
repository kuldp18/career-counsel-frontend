import './Navbar.css';
import hamburger from '../images/ham.png';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <a href="index.html" className="logo">
          Consulting
        </a>
        <div className="nav-links">
          <ul>
            <li>
              <a className="active" href="index.html">
                Home
              </a>
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
          Login
        </button>
        <button id="register-btn" className="btn btn-primary btn-lg">
          Register
        </button>
        <img src={hamburger} alt="hamburger" className="menu-hamburger" />
      </nav>
    </>
  );
};

export default Navbar;
