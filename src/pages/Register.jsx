import React, { useState } from 'react';
import './Register.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import saveImg from '../images/save.webp';
import { Link } from 'react-router-dom';
import { studentSignup } from '../auth/helper';

const Register = () => {
  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    hsc: '',
    ssc: '',
    error: true,
    success: false,
  };

  const [message, setMessage] = useState('');

  const [formValues, setFormValues] = useState(initialFormState);
  const { firstName, lastName, email, password, hsc, ssc, error, success } =
    formValues;

  const handleChange = (field) => (e) => {
    setFormValues({ ...formValues, error: false, [field]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, error: false });
    // set ssc and hsc marks to 0 if not provided
    if (hsc === '') {
      setFormValues({ ...formValues, hsc: 0 });
    }
    if (ssc === '') {
      setFormValues({ ...formValues, ssc: 0 });
    }
    // convert ssc and hsc marks to numbers
    const hscMarks = Number(hsc);
    const sscMarks = Number(ssc);
    studentSignup({ firstName, lastName, email, password, hscMarks, sscMarks })
      .then((data) => {
        if (data.error) {
          setFormValues({ ...formValues, error: data.err, success: false });
          setMessage(`Student Signup Failed! Error: ${error}`);
        } else {
          setFormValues({
            ...formValues,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            hsc: '',
            ssc: '',
            error: '',
            success: true,
          });
          setMessage('Student Signup Successful!');
        }
      })
      .catch((err) => {
        console.log('Error in signing up');
        console.error(err);
      });
  };

  return (
    <>
      <Navbar />
      <section className="landingmainsection">
        <div style={{ flex: '1', margin: '55px' }}>
          <p
            className={`text-3xl font-extrabold ${
              success ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
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
              onChange={handleChange('firstName')}
            />
            <input
              type="text"
              placeholder="Last Name*"
              minLength="3"
              maxLength="32"
              required
              value={lastName}
              onChange={handleChange('lastName')}
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email*"
              value={email}
              onChange={handleChange('email')}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password*"
              minLength="8"
              value={password}
              required
              onChange={handleChange('password')}
            />
            <input
              type="text"
              name="ssc"
              id="ssc"
              placeholder="SSC Marks"
              value={ssc}
              onChange={handleChange('ssc')}
            />
            <input
              type="text"
              name="hsc"
              id="hsc"
              placeholder="HSC Marks"
              value={hsc}
              onChange={handleChange('hsc')}
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
