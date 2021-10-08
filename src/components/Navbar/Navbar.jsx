import React, { useState } from 'react';
import { Button, IconButton, Typography } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { ContactData } from '../../assets/data/data';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>            
            <Nav id='Top'>
                <Logo></Logo>
                <Burger>
                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                        <MenuIcon />
                    </IconButton>
                </Burger>
                <Menu isOpen={isOpen}>
                    <MenuLink component={Link} to='About' smooth={true} duration={1000}>
                        <Typography variant='subtitle1'>ABOUT</Typography>
                    </MenuLink>
                    <MenuLink component={Link} to='Skills' smooth={true} duration={1000}>
                        <Typography variant='subtitle1'>SKILLS</Typography>
                    </MenuLink>
                    <MenuLink component={Link} to='Projects' smooth={true} duration={1000}>
                        <Typography variant='subtitle1'>PROJECTS</Typography>
                    </MenuLink>
                    <MenuLink component={Link} to='Contact' smooth={true} duration={1000}>
                        <Typography variant='subtitle1'>CONTACT</Typography>
                    </MenuLink>                    
                    <Button 
                        href={ContactData.resume} 
                        variant='outlined' 
                        startIcon={<InsertDriveFileIcon />} 
                        sx={{ m: 3 }} 
                        target='_blank' 
                        rel='noreferrer noopener'>
                        Resume
                    </Button>
                </Menu>
            </Nav>
        </>
    )
}
    
const Nav = styled.nav`
    background: #ffffff;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        padding: 0 1rem;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: #ffffff;

    @media screen and (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`;

const MenuLink =styled(Link)`
    
    margin: 0.5rem 1rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #102A43;
    transition: all 0.3s ease-in;

    &:hover {
        color: #14919B;
        border-bottom: 2px solid #14919B;
        
    }
`;

const Burger = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
    }
`;

const Logo = styled(Link)` 
    color: inherit;
    text-decoration: none;  
`;

export default Navbar;
