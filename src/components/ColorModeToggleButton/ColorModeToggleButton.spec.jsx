import { renderTheme } from '../../styles/render-theme';
import { ColorModeToggleButton } from '.';
import { screen, fireEvent } from '@testing-library/react';
import { ColorModeProvider } from '../../contexts/ColorModeContext';

describe('<ColorModeToggleButton />', () => {
  it('should render ColorModeToggleButton with correct text', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorModeToggleButton />
      </ColorModeProvider>
    );
    expect(screen.getByText('DARK')).toBeInTheDocument();
  });

  it('should call toggleColorMode on click', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorModeToggleButton />
      </ColorModeProvider>
    );
    fireEvent.click(screen.getByText('DARK'));
    expect(screen.getByText('LIGHT')).toBeInTheDocument();
  });
});