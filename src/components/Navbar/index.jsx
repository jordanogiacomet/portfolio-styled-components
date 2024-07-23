/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Nav } from '../Nav';
import { LogoLink } from '../LogoLink';
import { Menu } from '../Menu';
import { NavLink } from '../NavLink';
import { MobileMenu } from '../MobileMenu';
import { MenuButton } from '../MenuButton';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from '../MenuOverlay';
import { Container } from '../Container';
import { LanguageToggleButton } from '../LanguageToggleButton';
import * as Styled from './styles';
import { useLanguage } from '../../contexts/LanguageContext';
import ColorModeToggleButton from '../ColorModeToggleButton';
import { useColorMode } from '../../contexts/ColorModeContext';

const navLinksPt = [
  {
    title: "Sobre",
    path: "#about",
  },
  {
    title: "Projetos",
    path: "#projects",
  },
  {
    title: "Contato",
    path: "#contact",
  },
]

const navLinksEn = [
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
  const { language } = useLanguage();
  const { colorMode } = useColorMode();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  const navLinks = language === 'en' ? navLinksPt : navLinksEn;

  return (
    <Nav className={colorMode}>
      <Container type='nav-container'>
        <LogoLink text="LOGO" link="/"/>
        <MobileMenu>
          {!navbarOpen ? (
            <MenuButton onClick={() => setNavbarOpen(true)} aria-label="Abrir menu">
              <Bars3Icon className="h-5 w-5" />
            </MenuButton>
          ) : (
            <MenuButton onClick={() => setNavbarOpen(false)} aria-label="Fechar menu">
              <XMarkIcon className="h-5 w-5" />
            </MenuButton>
          )}
        </MobileMenu>
        <Menu open={navbarOpen}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} onClick={handleLinkClick}>{link.title}</NavLink>
              </li>
            ))}
          </ul>
        </Menu>
      </Container>
      {navbarOpen && <MenuOverlay links={navLinks} onClick={handleLinkClick} />}
    </Nav>
  );
};

Navbar.propTypes = {

};
