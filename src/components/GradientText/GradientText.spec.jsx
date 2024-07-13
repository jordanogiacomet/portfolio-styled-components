import { renderTheme } from '../../styles/render-theme';
import { GradientText } from '.';
import { screen } from '@testing-library/react';


describe('<GradientText />', () => {
  it('should render gradient text with children', () => {
    renderTheme(<GradientText>texto</GradientText>);
    const text = screen.getByText('texto');

    expect(text).toBeInTheDocument();
  });
  it('should apply default gradient text styles', () => {
    const { container } = renderTheme(<GradientText>texto</GradientText>);

    expect(container.firstChild).toHaveStyleRule('background', 'linear-gradient(to right, #a855f7, #ec4899)');
    expect(container.firstChild).toHaveStyleRule('-webkit-background-clip', 'text');
    expect(container.firstChild).toHaveStyleRule('-webkit-text-fill-color', 'transparent');
  });
  it('should apply custom gradient text styles', () => {
    const { container } = renderTheme(<GradientText from="#121212" via="#ffffff" to="#f2f2f2">texto</GradientText>);

    expect(container.firstChild).toHaveStyleRule('background', 'linear-gradient(to right, #121212, #ffffff, #f2f2f2)');
  });
});