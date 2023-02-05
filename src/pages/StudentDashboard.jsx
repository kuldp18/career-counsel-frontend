import React from 'react';

import Navbar from '../components/Navbar';

const StudentDashboard = () => {
  return (
    <>
      <Navbar />
      <p className="text-3xl text-purple-700 font-extrabold mt-[200px]">
        Welcome to Student Dashboard!
      </p>
    </>
  );
};

export default StudentDashboard;
