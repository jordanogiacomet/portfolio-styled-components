import { renderTheme } from '../../styles/render-theme';
import { screen, fireEvent } from '@testing-library/react';
import { ColorPicker } from '.';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { LanguageProvider } from '../../contexts/LanguageContext';

describe('<ColorPicker />', () => {
  it('should render the ColorPicker component', () => {
    renderTheme(
      <LanguageProvider>
        <ColorProvider>
          <ColorPicker />
        </ColorProvider>
      </LanguageProvider>
    );

    expect(screen.getByText('Cor do Texto')).toBeInTheDocument();
    expect(screen.getByText('Cor do Fundo')).toBeInTheDocument();
    expect(screen.getByText('Cores do Gradiente')).toBeInTheDocument();
  });

  it('should change primary color when picker is used', () => {
    renderTheme(
      <LanguageProvider>
        <ColorProvider>
          <ColorPicker />
        </ColorProvider>
      </LanguageProvider>
    );

    const primaryColorPicker = screen.getAllByRole('textbox')[0];
    fireEvent.change(primaryColorPicker, { target: { value: '#123456' } });
    expect(primaryColorPicker.value).toBe('#123456');
  });
});
