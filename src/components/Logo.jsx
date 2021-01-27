import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ name }) => {
  return (
    <>
      <div className='logo color-white'>
        <Link to='/'>{name}</Link>
      </div>
    </>
  );
};

export default Logo;
