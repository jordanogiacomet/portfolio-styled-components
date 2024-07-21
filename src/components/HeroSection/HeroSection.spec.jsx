import { renderTheme } from '../../styles/render-theme';
import { HeroSection } from '.';
import { screen } from '@testing-library/react';

describe('<HeroSection />', () => {
  it('should render the HeroSection with all components', () => {
    renderTheme(<HeroSection />);
    
    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    expect(screen.getByText('Me Contrate')).toBeInTheDocument();
    expect(screen.getByText('Download CV')).toBeInTheDocument();
    expect(screen.getByAltText('hero image')).toBeInTheDocument();
    expect(screen.getByText(/sempre em busca de aprimorar minhas capacidades/i)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<HeroSection />);
    expect(container).toMatchSnapshot();
  });
});
