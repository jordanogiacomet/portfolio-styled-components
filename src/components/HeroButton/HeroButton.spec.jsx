import { renderTheme } from '../../styles/render-theme';
import { HeroButton } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<HeroButton />', () => {
  it('should render button with children', () => {
    renderTheme(<HeroButton>Click</HeroButton>);
    const button = screen.getByText('Click');
    expect(button).toBeInTheDocument();
  });

  it('should apply default button styles', () => {
    const { container } = renderTheme(<HeroButton>Click</HeroButton>);
    expect(container.firstChild).toHaveStyleRule('padding', theme.button.default.padding);
    expect(container.firstChild).toHaveStyleRule('border-radius', theme.button.default.borderRadius);
    expect(container.firstChild).toHaveStyleRule('color', theme.button.default.textColor);
    expect(container.firstChild).toHaveStyleRule('display', 'inline-flex');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
    expect(container.firstChild).toHaveStyleRule('min-width', '150px');
  });

  it('should apply hireMe button styles', () => {
    const { container } = renderTheme(<HeroButton type="hireMe">Hire me</HeroButton>);
    expect(container.firstChild).toHaveStyleRule('padding', theme.button.hireMe.padding);
    expect(container.firstChild).toHaveStyleRule('border-radius', theme.button.hireMe.borderRadius);
    expect(container.firstChild).toHaveStyleRule('color', theme.button.hireMe.textColor);
  });

  it('should be accessible with an aria-label', () => {
    renderTheme(<HeroButton aria-label="accessible button">Accessible</HeroButton>);
    expect(screen.getByLabelText('accessible button')).toBeInTheDocument();
  });
});
