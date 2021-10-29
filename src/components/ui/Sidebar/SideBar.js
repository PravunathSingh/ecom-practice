import React from 'react';
import {
  SidebarContainer,
  Icon,
  Closeicon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinks,
} from './SidebarElements';

const SideBar = ({ isOpen, toggleMobileMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggleMobileMenu={toggleMobileMenu}>
      <Icon onClick={toggleMobileMenu}>
        <Closeicon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to='/'>Home</SidebarLinks>
          <SidebarLinks to='/about'>About</SidebarLinks>
          <SidebarLinks to='/categories'>Categories</SidebarLinks>
          <SidebarLinks to='/all-products'>Products</SidebarLinks>
          <SidebarLinks to='/contactUs'>Contact</SidebarLinks>
          <SidebarLinks to='/login'>Login / SignUp</SidebarLinks>
          <SidebarLinks to='/wishlist'>WishList</SidebarLinks>
          <SidebarLinks to='/cart'>My Cart</SidebarLinks>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
