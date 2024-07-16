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
    expect(screen.getByText('Hello! Im a technology enthusiast with a deep love for programming. I believe in the power of technology to transform ideas into reality and improve our world. Every challenge I face in the world of coding is a chance to not only develop innovative solutions, but also to develop as a professional and individual.')).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<HeroSection />);

    expect(container).toMatchSnapshot();
  })
});