import { screen } from '@testing-library/react';
import { Footer } from '.';
import '@testing-library/jest-dom/extend-expect';
import { renderTheme } from '../../styles/render-theme';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';
import { LanguageProvider } from '../../contexts/LanguageContext';

describe('<Footer />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <LanguageProvider>
            <Footer />
          </LanguageProvider>
        </ColorProvider>
      </ColorModeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render logo link', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <LanguageProvider>
            <Footer />
          </LanguageProvider>
        </ColorProvider>
      </ColorModeProvider>
    );
    const logoLink = screen.getByRole('link', { name: 'LOGO' });
    expect(logoLink).toBeInTheDocument();
  });
});
