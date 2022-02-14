import React, { useState, useEffect } from 'react';
import { Button, IconButton, Typography } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { ContactData } from '../../assets/data/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDown = () => {
      const scrollY = window.pageYOffset;

      setIsTop(scrollY < 150);

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDown(scrollY > lastScrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDown);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    console.log(scrollDown);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDown]);

  return (
    <>
      <Nav scrollDown={scrollDown} isTop={isTop}>
        <Logo></Logo>
        <Burger>
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon />
          </IconButton>
        </Burger>
        <Menu isOpen={isOpen}>
          <MenuLink to="About" smooth={true} duration={1000}>
            <Typography variant="subtitle1">ABOUT</Typography>
          </MenuLink>
          <MenuLink to="Skills" smooth={true} duration={1000}>
            <Typography variant="subtitle1">SKILLS</Typography>
          </MenuLink>
          <MenuLink to="Projects" smooth={true} duration={1000}>
            <Typography variant="subtitle1">PROJECTS</Typography>
          </MenuLink>
          <MenuLink to="Contact" smooth={true} duration={1000}>
            <Typography variant="subtitle1">CONTACT</Typography>
          </MenuLink>
          <Button
            href={ContactData.resume}
            variant="outlined"
            startIcon={<InsertDriveFileIcon />}
            sx={{ m: 3 }}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </Button>
        </Menu>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  background: #f5f7fa;
  box-shadow: ${({ isTop }) =>
    isTop ? '0' : '0 4px 16px rgba(0, 0, 0, 0.07)'};
  z-index: 1;
  opacity: ${({ scrollDown }) => (scrollDown ? '0' : '1')};
  transition: all 0.3s ease-out;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const MenuLink = styled(Link)`
  margin: 0.5rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #102a43;
  transition: all 0.3s ease-out;

  &:hover {
    color: #14919b;
    border-bottom: 2px solid #14919b;
  }
`;

const Burger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Logo = styled.div`
  color: inherit;
  text-decoration: none;
`;

export default Navbar;
