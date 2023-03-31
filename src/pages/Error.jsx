import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import React from "react";

const Error = () => {
  const { isPageActive } = useAppContext();

  return (
    <div className='error'>
      <header>
        <h2 className='h2'>Lost your way?</h2>
      </header>
      <Link to='/' className="btn">Go back home</Link>
    </div>
  );
};
export default Error;
