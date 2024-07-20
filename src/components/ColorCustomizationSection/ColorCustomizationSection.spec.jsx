import { renderTheme } from '../../styles/render-theme';
import { ColorCustomizationSection } from '.';
import { screen } from '@testing-library/react';

describe('<ColorCustomizationSection />', () => {
  it('should render ColorCustomizationSection with heading', () => {
    renderTheme(<ColorCustomizationSection />);
    const heading = screen.getByRole('heading', { name: /customize/i });
    expect(heading).toBeInTheDocument();
  });
});