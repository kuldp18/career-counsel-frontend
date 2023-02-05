import React from 'react';
import { useState } from 'react';
import './Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import saveImg from '../images/save.webp';
import { Link, Redirect } from 'react-router-dom';
import { studentSignin, isAuthenticated, authenticate } from '../auth/helper';

const Login = () => {
  const initialState = {
    email: '',
    password: '',
    error: '',
    loading: false,
    didRedirect: false,
  };

  const [formValues, setFormValues] = useState(initialState);
  const { email, password, error, loading, didRedirect } = formValues;
  const { user } = isAuthenticated();
  const [message, setMessage] = useState('hello');

  const handleChange = (field) => (e) => {
    setFormValues({ ...formValues, error: false, [field]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, error: false, loading: true });
    setMessage('Loading...');
    studentSignin({ email, password }).then((data) => {
      if (data.error) {
        setFormValues({ ...formValues, error: data.err, loading: false });
        setMessage(`Student login failed: ${error}`);
      } else {
        authenticate(data, () => {
          setFormValues({
            ...formValues,
            email: '',
            password: '',
            error: '',
            loading: false,
            didRedirect: true,
          });
        });
        setMessage(`Student login successfull!`);
      }
    });
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 2) {
        return <Redirect to="/admin/dashboard" />;
      } else if (user && user.role === 1) {
        return <Redirect to="/counsellor/dashboard" />;
      } else {
        return <Redirect to="/student/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <>
      {performRedirect()}
      <Navbar />
      <section className="landingmainsection">
        <div style={{ flex: '1', margin: '55px' }}>
          <p className="text-3xl font-extrabold">{message}</p>
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

          <form className="w-[100%] flex flex-col gap-3" onSubmit={handleForm}>
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
              required
              placeholder="Password*"
              value={password}
              onChange={handleChange('password')}
            />

            <button
              class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
              type="submit"
            >
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
