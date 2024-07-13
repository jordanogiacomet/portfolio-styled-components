import { renderTheme } from '../../styles/render-theme';
import { Title } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Title />', () => {
  it('should render title with children', () => {
    renderTheme(<Title>texto</Title>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toBeInTheDocument();
  });
  it('should render with default styles', () => {
    renderTheme(<Title>texto</Title>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule({
      color: 'white',
      'margin-bottom': '1rem',
      'font-weight': '800',
      'font-size': '2.5rem',
    });
  });
  /*
  it('should render title in small screens', () => {
      renderTheme(<Title>texto</Title>);
      const heading = screen.getByRole('heading', { name: 'texto' });

      expect(heading).toHaveStyleRule('font-size', '3rem', {
        media: theme.media.sm,
      });
    });
    it('should render title in large screens', () => {
      renderTheme(<Title>texto</Title>);
      const heading = screen.getByRole('heading', { name: 'texto' });

      expect(heading).toHaveStyleRule('font-size', '4rem', {
        media: theme.media.sm,
      });
    });
  */
});