import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav class="navbar">
        <a href="index.html" class="logo">
          Consulting
        </a>
        <div class="nav-links">
          <ul>
            <li>
              <a class="active" href="index.html">
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
        <button id="login-btn" class="btn btn-primary btn-lg">
          Login
        </button>
        <button id="register-btn" class="btn btn-primary btn-lg">
          Register
        </button>
        <img src="images/ham.png" alt="menu hamburger" class="menu-hamburger" />
      </nav>
    </>
  );
};

export default Navbar;
