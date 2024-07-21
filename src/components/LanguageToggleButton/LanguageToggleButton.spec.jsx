import { screen, fireEvent } from '@testing-library/react';
import { LanguageToggleButton } from '.';
import { renderTheme } from '../../styles/render-theme';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';

describe('<LanguageToggleButton />', () => {
  it('should render with initial language', () => {
    renderTheme(
      <ColorModeProvider>
        <LanguageProvider>
          <LanguageToggleButton />
        </LanguageProvider>
      </ColorModeProvider>
    );
    expect(screen.getByText('PT-BR')).toBeInTheDocument();
  });

  it('should toggle language on click', () => {
    renderTheme(
      <ColorModeProvider>
        <LanguageProvider>
          <LanguageToggleButton />
        </LanguageProvider>
      </ColorModeProvider>
    );
    const button = screen.getByText('PT-BR');
    fireEvent.click(button);
    expect(screen.getByText('EN-US')).toBeInTheDocument();
  });

  it('should have the correct aria-label', () => {
    renderTheme(
      <ColorModeProvider>
        <LanguageProvider>
          <LanguageToggleButton />
        </LanguageProvider>
      </ColorModeProvider>
    );
    expect(screen.getByLabelText('Switch language')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <ColorModeProvider>
        <LanguageProvider>
          <LanguageToggleButton />
        </LanguageProvider>
      </ColorModeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
