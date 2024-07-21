import { renderTheme } from '../../styles/render-theme';
import { Heading } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { ColorProvider } from '../../contexts/ColorCustomizationContext'; // Certifique-se de que o ColorProvider está importado
import { ColorModeProvider } from '../../contexts/ColorModeContext'; // Certifique-se de que o ColorModeProvider está importado

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <Heading>texto</Heading>
        </ColorProvider>
      </ColorModeProvider>
    );
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <Heading colorDark={false}>texto</Heading>
        </ColorProvider>
      </ColorModeProvider>
    );
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading size small', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <Heading size="small">texto</Heading>
        </ColorProvider>
      </ColorModeProvider>
    );
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render correct heading size medium', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <Heading size="medium">texto</Heading>
        </ColorProvider>
      </ColorModeProvider>
    );
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.big,
    });
  });

  it('should render correct heading size big', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <Heading size="big">texto</Heading>
        </ColorProvider>
      </ColorModeProvider>
    );
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xbig,
    });
  });

  it('should render correct heading size huge', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <Heading size="huge">texto</Heading>
        </ColorProvider>
      </ColorModeProvider>
    );
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <Heading uppercase={true}>texto</Heading>
        </ColorProvider>
      </ColorModeProvider>
    );
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <Heading as='h6'>texto</Heading>
        </ColorProvider>
      </ColorModeProvider>
    );
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
