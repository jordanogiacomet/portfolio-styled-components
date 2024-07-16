import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Navbar } from '.';

const navLinks = [
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' },
];

describe('<Navbar />', () => {
  it('should render Navbar with logo and nav links', () => {
    renderTheme(<Navbar />);
    
    // Verificar se o logo está presente
    expect(screen.getByText('LOGO')).toBeInTheDocument();

    // Verificar se os links estão presentes
    navLinks.forEach(link => {
      const elements = screen.getAllByText(link.title);
      expect(elements.length).toBeGreaterThan(0);
    });
  });
  /*
  it('should toggle the menu when menu button is clicked', () => {
    renderTheme(<Navbar />);
    
    const menuButton = screen.getByRole('button');
    
    // Verificar se o menu não está visível inicialmente
    navLinks.forEach(link => {
      const elements = screen.getAllByText(link.title);
      elements.forEach(element => {
        expect(element).not.toBeVisible();
      });
    });

    // Simular clique no botão de menu (abrir)
    fireEvent.click(menuButton);
    navLinks.forEach(link => {
      const elements = screen.getAllByText(link.title);
      elements.forEach(element => {
        expect(element).toBeVisible();
      });
    });

    // Simular clique no botão de menu (fechar)
    fireEvent.click(menuButton);
    navLinks.forEach(link => {
      const elements = screen.getAllByText(link.title);
      elements.forEach(element => {
        expect(element).not.toBeVisible();
      });
    });
  });
  */
});
