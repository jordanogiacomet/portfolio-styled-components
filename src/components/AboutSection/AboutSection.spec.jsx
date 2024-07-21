import { renderTheme } from '../../styles/render-theme';
import { AboutSection } from '.';
import { screen, fireEvent } from '@testing-library/react';
import { Footer } from '../Footer';

describe('<AboutSection />', () => {
  it('should render AboutSection with English language', () => {
    renderTheme(
      <>
        <AboutSection />
        <Footer />
      </>
    );

    const button = screen.getByText('PT-BR');
    fireEvent.click(button);
    expect(screen.getByText('About me')).toBeInTheDocument();
  });

  it('should render AboutSection with default language', () => {
    renderTheme(<AboutSection />);
    expect(screen.getByText('Sobre mim')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<AboutSection />);
    expect(container).toMatchSnapshot();
  });
});
