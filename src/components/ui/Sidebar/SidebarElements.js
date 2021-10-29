import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff8ec;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Closeicon = styled(FaTimes)`
  color: #0a1d37;
  opacity: 0.8;
`;

export const Icon = styled.div`
  position absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
  font-size: 1.5rem;
`;

export const SidebarWrapper = styled.div`
  color: #0a1d37;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media (max-width: 800px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLinks = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  margin-bottom: 2rem;
  transition: 0.2s ease-in-out;
  color:#3E4057,
  opacity: 0.8;
  font-weight: 500;
  &:hover {
    opacity: 1;
    color: #064420,
    transition: 0.2s ease-in-out;
  }
`;
