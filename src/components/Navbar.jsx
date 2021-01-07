import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {menuData} from "../data/MenuData"
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
height: 60px;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;

`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
text-decoration: none;
cursor: pointer;
`


const Logo = styled(Link)`
${NavLink}
font-style: italic;
color: #fff;
`;
 
const MenuBars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px){
    display: block;
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
}
`;

const NavMenu= styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px) {
    display:none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;

const NavBtn = styled.div`
display:flex;
align-item:center;
margin-right: 24px;

@media screen and (max-width: 768px) {
    display:none;
}
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to='/'>REALOO</Logo>
            <MenuBars />
            <NavMenu>
                {
                    menuData.map((item, index)=>(
                        <NavMenuLinks to={item.linkl} key={index} >
                            {item.title}
                        </NavMenuLinks>        
                    ))
                }
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary="true">
                    Contact us
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
