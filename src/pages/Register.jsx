import React from 'react';
import './Register.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import saveImg from '../images/save.webp';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <Navbar />
      <section className="landingmainsection">
        <div style={{ flex: '1', margin: '55px' }}>
          <h1 style={{ margin: '15px' }} className="footheading">
            Counseling
          </h1>
          <h2 style={{ margin: '15px' }}>Create an account</h2>
          <hr />
          <h3 style={{ margin: '15px' }}>
            Already have an account?
            <Link to="/login">Login here</Link>
          </h3>
          <form className="mainform">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button
              style={{ margin: '15px' }}
              type="submit"
              className="btn btn-primary btn-lg"
            >
              Register
            </button>
          </form>
        </div>
        <div className="headingimage" style={{ flex: '1' }}>
          <img className="mainimage" src={saveImg} alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
