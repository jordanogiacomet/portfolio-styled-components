import { renderTheme } from '../../styles/render-theme';
import { Button } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Button />', () => {
  it('should render button with children', () => {
    renderTheme(<Button>Click</Button>);
    const button = screen.getByText('Click');

    expect(button).toBeInTheDocument();
  });
  it('should apply default button styles', () => {
    const { container } = renderTheme(<Button>Click</Button>);
    
    expect(container.firstChild).toHaveStyleRule('padding', theme.button.default.padding);
    expect(container.firstChild).toHaveStyleRule('border-radius', theme.button.default.borderRadius);
    expect(container.firstChild).toHaveStyleRule('color', theme.button.default.textColor);
    expect(container.firstChild).toHaveStyleRule('background', theme.button.default.background);
  });
  it('should apply hireMe button styles', () => {
    const { container } = renderTheme(<Button type="hireMe">Hire me</Button>)
  
    expect(container.firstChild).toHaveStyleRule('padding', theme.button.hireMe.padding);
    expect(container.firstChild).toHaveStyleRule('border-radius', theme.button.hireMe.borderRadius);
    expect(container.firstChild).toHaveStyleRule('color', theme.button.hireMe.textColor);
    expect(container.firstChild).toHaveStyleRule('background', theme.button.hireMe.background);
  });
  it('should apply hover styles correctly', () => {
    const { container } = renderTheme(<Button>Hover Me</Button>);
    expect(container.firstChild).toHaveStyleRule('background-color', theme.button.default.hoverBgColor, {
      modifier: ':hover',
    });
  });

  it('should be accessible with an aria-label', () => {
    renderTheme(<Button aria-label="accessible button">Accessible</Button>);
    expect(screen.getByLabelText('accessible button')).toBeInTheDocument();
  });
});