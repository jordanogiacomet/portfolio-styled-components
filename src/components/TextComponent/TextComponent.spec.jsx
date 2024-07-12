import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    expect(screen.getByText('texto')).toBeInTheDocument();
  });
  it('should render with dark color', () => {
    renderTheme(<TextComponent colorDark={true}>texto</TextComponent>);
    const text = screen.getByText('texto');

    expect(text).toHaveStyle({
      color: theme.colors.primaryColor,
    });
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>texto</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});