import React, { useState } from 'react';
import './Register.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import saveImg from '../images/save.webp';
import { Link } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hsc, setHsc] = useState('');
  const [ssc, setSsc] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
      hsc: parseInt(hsc) || 0,
      ssc: parseInt(ssc) || 0,
    };

    console.log(data);
  };
  return (
    <>
      <Navbar />
      <section className="landingmainsection">
        <div style={{ flex: '1', margin: '55px' }}>
          <h2 className="mt-5 mb-5 text-4xl text-purple-600">
            Create an account
          </h2>
          <hr />
          <h3 className="mt-5 mb-5 text-base">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-500">
              Login here
            </Link>
          </h3>
          <form className="w-[100%] flex flex-col gap-3" onSubmit={handleForm}>
            <input
              type="text"
              placeholder="First Name*"
              minLength="3"
              maxLength="32"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name*"
              minLength="3"
              maxLength="32"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password*"
              minLength="8"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              name="ssc"
              id="ssc"
              placeholder="SSC Marks"
              value={ssc}
              onChange={(e) => setSsc(e.target.value)}
            />
            <input
              type="text"
              name="hsc"
              id="hsc"
              placeholder="HSC Marks"
              value={hsc}
              onChange={(e) => setHsc(e.target.value)}
            />
            <button
              class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
              type="submit"
            >
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-white text-2xl">
                Register
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

export default Register;
