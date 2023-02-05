import React from 'react';
import './Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import saveImg from '../images/save.webp';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="landingmainsection">
        <div style={{ flex: '1', margin: '55px' }}>
          <h2 className="mt-5 mb-5 text-4xl text-purple-600">
            Login to your account
          </h2>
          <hr />
          <h3 className="mt-5 mb-5 text-base">
            Need an account?{' '}
            <Link to="/register" className="text-purple-500">
              Create an account
            </Link>
          </h3>
          {/* <form className="mainform">
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
              Login
            </button>
          </form> */}

          <form className="w-[100%] flex flex-col gap-3">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email*"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password*"
            />

            <button class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-white text-2xl">
                Login
              </span>
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

export default Login;
