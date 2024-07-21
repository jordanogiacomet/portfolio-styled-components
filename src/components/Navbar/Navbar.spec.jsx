/* eslint-disable react/prop-types */
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Navbar } from '.';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';
import { LanguageProvider } from '../../contexts/LanguageContext';

const navLinks = [
  { title: 'Sobre', path: '#about' },
  { title: 'Projetos', path: '#projects' },
  { title: 'Contato', path: '#contact' },
];

describe('<Navbar />', () => {
  it('should render Navbar with logo and nav links in Portuguese', () => {
    const Wrapper = ({ children }) => (
      <ColorModeProvider>
        <ColorProvider>
          <LanguageProvider initialLanguage="pt">
            {children}
          </LanguageProvider>
        </ColorProvider>
      </ColorModeProvider>
    );

    renderTheme(<Navbar />, { wrapper: Wrapper });

    // Verificar se o logo está presente
    expect(screen.getByText('LOGO')).toBeInTheDocument();

    // Verificar se os links estão presentes
    navLinks.forEach(link => {
      const element = screen.getByRole('link', { name: link.title });
      expect(element).toBeInTheDocument();
    });
  });

  // Descomente e ajuste este bloco de teste se necessário
  /*
  it('should toggle the menu when menu button is clicked', () => {
    const Wrapper = ({ children }) => (
      <ColorModeProvider>
        <ColorProvider>
          <LanguageProvider initialLanguage="pt">
            {children}
          </LanguageProvider>
        </ColorProvider>
      </ColorModeProvider>
    );

    renderTheme(<Navbar />, { wrapper: Wrapper });

    const menuButton = screen.getByRole('button');

    // Verificar se o menu não está visível inicialmente
    navLinks.forEach(link => {
      const elements = screen.getAllByText(link.title, { exact: false });
      elements.forEach(element => {
        expect(element).not.toBeVisible();
      });
    });

    // Simular clique no botão de menu (abrir)
    fireEvent.click(menuButton);
    navLinks.forEach(link => {
      const elements = screen.getAllByText(link.title, { exact: false });
      elements.forEach(element => {
        expect(element).toBeVisible();
      });
    });

    // Simular clique no botão de menu (fechar)
    fireEvent.click(menuButton);
    navLinks.forEach(link => {
      const elements = screen.getAllByText(link.title, { exact: false });
      elements.forEach(element => {
        expect(element).not.toBeVisible();
      });
    });
  });
  */
});
