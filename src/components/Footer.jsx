import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footdescription">
        <h1 className="footheading">Consulting</h1>
        <h2 className="footheading">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          voluptate, error necessitatibus commodi est, sequi optio impedit quod
          asperiores quas eaque odio, dolores eos? Modi rem consectetur
          accusantium officia adipisci.
        </h2>
      </div>
      <div className="footmenu">
        <h1 className="footheading1">Useful Links</h1>
        <h6 className="footheading"></h6>
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
      <div className="footcontact">
        <h1 className="footheading1">Contact</h1>
        <h6 className="footheading"></h6>
        <h2 className="footheading">
          Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051
        </h2>
        <h2 className="footheading">info@yourdomain.com</h2>
        <h2 className="footheading">+99 (0) 101 0000 888</h2>
      </div>
      <div className="Signup">
        {' '}
        <h1 className="footheading1">Sign Up</h1>
        <h6 className="footheading"></h6>
        <h2 className="footheading">
          Keep me up to date with content, updates, and offers.
        </h2>
        <p>
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter Your Email Address"
            required=""
          />
        </p>
        <p style={{ margin: '10px' }}>
          <input type="submit" value="SUBMIT" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
