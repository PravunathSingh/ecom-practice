import React, { useState } from 'react';
import Navbar from './Navbar';
import SideBar from './Sidebar/SideBar';

const Header = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
      <Navbar toggleMobileMenu={toggleMobileMenu} />
    </>
  );
};

export default Header;
