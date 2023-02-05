import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';
import hamburger from '../images/ham.png';
import { studentSignout, isAuthenticated } from '../auth/helper';

const Navbar = ({ history }) => {
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
              <a href="contact.html">Contact us</a>
            </li>

            {isAuthenticated() && isAuthenticated().student.role === 0 && (
              <li>
                <Link to="/student/dashboard">Dashboard</Link>
              </li>
            )}
            {isAuthenticated() && isAuthenticated().student.role === 1 && (
              <li>
                <Link to="/counsellor/dashboard">Dashboard</Link>
              </li>
            )}
            {isAuthenticated() && isAuthenticated().student.role === 2 && (
              <li>
                <Link to="/admin/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>

        {!isAuthenticated() && (
          <>
            <button
              id="login-btn"
              className="btn btn-primary btn-lg bg-purple-500"
            >
              <Link
                to="/login"
                style={{
                  color: 'white',
                }}
              >
                Login
              </Link>
            </button>
            <button
              id="register-btn"
              className="btn btn-primary btn-lg bg-purple-500"
            >
              <Link
                to="/register"
                style={{
                  color: 'white',
                }}
              >
                Register
              </Link>
            </button>
          </>
        )}

        {isAuthenticated() && (
          <button
            id="login-btn"
            className="btn btn-primary btn-lg bg-purple-500 text-white"
            onClick={() => {
              studentSignout(() => {
                history.push('/');
              });
            }}
          >
            Signout
          </button>
        )}

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

export default withRouter(Navbar);
