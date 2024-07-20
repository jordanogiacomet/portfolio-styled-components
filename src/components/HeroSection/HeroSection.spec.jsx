import { renderTheme } from '../../styles/render-theme';
import { HeroSection } from '.';
import { screen } from '@testing-library/react';

describe('<HeroSection />', () => {
  it('should render the HeroSection with all components', () => {
    renderTheme(<HeroSection />);
    
    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    expect(screen.getByText('Hire Me')).toBeInTheDocument();
    expect(screen.getByText('Download CV')).toBeInTheDocument();
    expect(screen.getByAltText('hero image')).toBeInTheDocument();
    expect(screen.getByText(/always looking to improve my capabilities/i)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<HeroSection />);
    expect(container).toMatchSnapshot();
  });
});
