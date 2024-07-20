// src/components/AboutSection/index.test.js
import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { AboutSection } from '.';

describe('<AboutSection />', () => {
  it('should render AboutSection with default language', () => {
    renderTheme(<AboutSection />);
    expect(screen.getByText('Sobre mim')).toBeInTheDocument();
  });

  it('should render AboutSection with English language', () => {
    renderTheme(<AboutSection />);
    const button = screen.getByText('PT-BR');
    fireEvent.click(button);
    expect(screen.getByText('About me')).toBeInTheDocument();
  });

  it('should change tabs on click', () => {
    renderTheme(<AboutSection />);
    fireEvent.click(screen.getByText('Soft Skills'));
    expect(screen.getByText('Comunicação eficaz')).toBeInTheDocument();
  });

  it('should apply active styles to active tab', () => {
    renderTheme(<AboutSection />);
    const button = screen.getByText('Soft Skills');
    fireEvent.click(button);
    expect(button).toHaveStyle('color: #1E90FF'); // Ajuste conforme necessário
  });
});
