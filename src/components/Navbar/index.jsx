/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Nav } from '../Nav';
import { NavContainer } from '../NavContainer';
import { LogoLink } from '../LogoLink';
import { Menu } from '../Menu';
import { NavLink } from '../NavLink';
import { MobileMenu } from '../MobileMenu';
import { MenuButton } from '../MenuButton';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from '../MenuOverlay';


const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
]

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <LogoLink text="LOGO" link="/"/>
        <MobileMenu>
          {!navbarOpen ? (
            <MenuButton onClick={() => setNavbarOpen(true)}>
              <Bars3Icon className="h-5 w-5"/>
            </MenuButton>
          ) : (
            <MenuButton onClick={() => setNavbarOpen(false)}>
              <XMarkIcon className="h-5 w-5" />
          </MenuButton>
          )}
        </MobileMenu>
        <Menu open={navbarOpen}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path}>{link.title}</NavLink>
              </li>
            ))}
          </ul>
      </Menu>
      </NavContainer>
      {navbarOpen && <MenuOverlay links={navLinks}/>}
    </Nav>
  );
};

Navbar.propTypes = {
 
};