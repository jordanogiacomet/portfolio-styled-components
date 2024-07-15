import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { AboutSection } from '.';

describe('<AboutSection />', () => {
  it('should render AboutSection with initial content', () => {
    renderTheme(<AboutSection />);
    
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Certifications')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('should switch to Education tab content', () => {
    renderTheme(<AboutSection />);
    
    fireEvent.click(screen.getByText('Education'));
    
    expect(screen.getByText('Fullstack Academy of Code')).toBeInTheDocument();
    expect(screen.queryByText('Node.js')).not.toBeInTheDocument();
  });

  it('should switch to Certifications tab content', () => {
    renderTheme(<AboutSection />);
    
    fireEvent.click(screen.getByText('Certifications'));
    
    expect(screen.getByText('AWS Cloud Practitioner')).toBeInTheDocument();
    expect(screen.queryByText('Node.js')).not.toBeInTheDocument();
  });
});
