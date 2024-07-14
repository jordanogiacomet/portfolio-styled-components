import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';
import { screen } from '@testing-library/react';

describe('<LogoLink />', () => {
  it('should render texto logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello World"/>);
    const heading = screen.getByRole('heading', { name: 'Hello World' });

    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });
  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello World" srcImg="/images/hero-image.png"/>);
    const heading = screen.getByRole('heading', { name: 'Hello World' });

    expect(heading.firstChild.firstChild).toHaveAttribute('src', '/images/hero-image.png');
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Hello World" srcImg="/images/hero-image.png"/>);

    expect(container.firstChild).toMatchSnapshot();
  });
});

