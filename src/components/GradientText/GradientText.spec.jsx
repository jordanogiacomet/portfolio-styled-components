import { screen } from '@testing-library/react';
import { GradientText } from '.';
import '@testing-library/jest-dom/extend-expect';
import { renderTheme } from '../../styles/render-theme';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';

describe('<GradientText />', () => {
  it('should render gradient text with children', () => {
    renderTheme(
      <ColorProvider>
        <GradientText>texto</GradientText>
      </ColorProvider>
    );
    const text = screen.getByText('texto');

    expect(text).toBeInTheDocument();
  });

  it('should apply custom gradient text styles from context', () => {
    const { container } = renderTheme(
      <ColorProvider>
        <GradientText>texto</GradientText>
      </ColorProvider>
    );

    expect(container.firstChild).toHaveStyleRule('background', 'linear-gradient(to right, #1E90FF, #4169E1, #00008B)');
    expect(container.firstChild).toHaveStyleRule('-webkit-background-clip', 'text');
    expect(container.firstChild).toHaveStyleRule('-webkit-text-fill-color', 'transparent');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <ColorProvider>
        <GradientText>texto</GradientText>
      </ColorProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
