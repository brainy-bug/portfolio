import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const SharedLayout = () => {
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
