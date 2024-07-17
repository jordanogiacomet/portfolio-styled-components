import { screen } from '@testing-library/react';
import { Footer } from '.';
import '@testing-library/jest-dom/extend-expect';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it('should render logo link', () => {
    renderTheme(<Footer />);
    const logoLink = screen.getByRole('link', { name: 'LOGO' });
    expect(logoLink).toBeInTheDocument();
  });

  it('should render text', () => {
    renderTheme(<Footer />);
    const text = screen.getByText('All rights reserved.');
    expect(text).toBeInTheDocument();
  });
});
