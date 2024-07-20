import { screen } from '@testing-library/react';
import { EmailButton } from '.';
import { renderTheme } from '../../styles/render-theme';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';

describe('<EmailButton />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <EmailButton type="submit">Send</EmailButton>
        </ColorProvider>
      </ColorModeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render EmailButton with correct children', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <EmailButton type="submit">Send</EmailButton>
        </ColorProvider>
      </ColorModeProvider>
    );
    const button = screen.getByText('Send');
    expect(button).toBeInTheDocument();
  });

  it('should have the correct type attribute', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <EmailButton type="submit">Send</EmailButton>
        </ColorProvider>
      </ColorModeProvider>
    );
    const button = screen.getByText('Send');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
