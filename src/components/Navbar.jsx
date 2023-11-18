import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import links from '../api/NavbarApi';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <header className={`text-gray-600 body-font`}>
      <div className={`container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center`} id='navContainer'>
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" id='logo'>
          <img src="/logo.png" alt="logo" width={30}/>
          <span className="ml-3 text-xl">Flexa</span>
        </a>
        <nav className={`md:ml-auto flex flex-wrap items-center text-base justify-center ${active ? 'active' : ''}`} id='nav'>
          {
            links.map((link) => (
              <Link key={link.id} to={`${link.path}`} className='mr-5 hover:text-gray-900'>{link.name}</Link>
            ))
          }
        </nav>
        <i className={`fa-solid fa-${active ? 'xmark' : 'bars'}`} onClick={toggleMenu} id='menuIcon'></i>
      </div>
    </header>
  );
};

export default Navbar;