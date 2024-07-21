// src/components/TextComponent/TextComponent.spec.jsx
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { screen } from '@testing-library/react';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    expect(screen.getByText('texto')).toBeInTheDocument();
  });

  it('should render with the correct color from the context', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    const text = screen.getByText('texto');
    expect(text).toHaveStyle({ color: '#FFFFFF' });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>texto</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});
