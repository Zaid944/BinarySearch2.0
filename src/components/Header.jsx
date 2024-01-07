import { Link } from "react-router-dom";
import React from "react";
import IMG_URI from "../assets/code_logo.png";
const Header = () => {
  return (
    <React.Fragment>
      <div className='flex h-24 bg-slate-800 justify-between'>
        <div className='ml-24 w-6/12'>
          <img src={IMG_URI} alt='Logo not available' className='h-24 w-24' />
        </div>
        <div className='flex mr-12 h-24 items-center w-6/12'>
          <div className='text-4xl text-white'>
            <Link to='/'>Home</Link>
          </div>
          <div className='ml-12 text-4xl text-white'>
            <Link to='/profile'>Profile</Link>
          </div>
          <div className='ml-12 text-4xl text-white'>
            <Link to='/compete'>Compete</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
