import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const SharedLayout = () => {
  //   useEffect(() => {
  //     alert(
  //       `Welcome to my portfolio website! 🥰

  // I am currently working hard to make this site a comprehensive representation of my skills and experiences. While it's still under construction, I invite you to take a look around and see what's already available.

  // Thank you for your patience! 🤗🤗`
  //     );
  //   }, []);

  return (
    <main>
      <Sidebar />
      <div className='main-content'>
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};
export default SharedLayout;
