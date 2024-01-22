import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import links from '../api/NavbarApi';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <header className={`text-gray-600`}>
      <div className={`container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center`} id='navContainer'>
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" id='logo'>
          <img src="/logo.png" alt="logo" width={30}/>
          <span className="ml-3 text-2xl text-green-500">Flexa</span>
        </a>
        <nav className={`md:ml-auto flex items-center text-base justify-center ${active ? 'active' : ''}`} id='nav'>
          {links.map((link) => (
            <Link
              key={link.id}
              to={`${link.path}`}
              className={`mr-5 hover:text-gray-900 font-bold ${location.pathname === link.path ? 'text-green-500' : ''}`}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <i className={`fa-solid fa-${active ? 'xmark' : 'bars'}`} onClick={toggleMenu} id='menuIcon'></i>
      </div>
    </header>
  );
};

export default Navbar;
