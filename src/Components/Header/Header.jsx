import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div>
      <img src="newtwitterlogo.png" alt="Bird Brain Logo" className='logo'/>
      <h1 className="headercolor">Bird Brain</h1>
    </div>
  );
};

export default Header;
