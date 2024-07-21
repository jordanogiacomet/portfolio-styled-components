import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { ContactSection } from '.';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';

describe('<ContactSection />', () => {
  it('should render the ContactSection component', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <ContactSection />
        </ColorProvider>
      </ColorModeProvider>
    );

    // Certifique-se de que a imagem de avatar está sendo renderizada
    expect(screen.getByAltText('whatsapp-avatar')).toBeInTheDocument();
  });

  it('should set aria-hidden attributes correctly', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <ContactSection />
        </ColorProvider>
      </ColorModeProvider>
    );

    const whatsappButton = document.querySelector('.floating-whatsapp-button');
    const whatsappChat = document.querySelector('.floating-whatsapp-chatbox');
    const sendButton = document.querySelector('.styles-module_buttonSend__kXjja');

    expect(whatsappButton).toHaveAttribute('aria-hidden', 'false');
    expect(whatsappChat).toHaveAttribute('aria-hidden', 'false');
    expect(sendButton).toHaveAttribute('aria-label', 'Enviar mensagem');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <ContactSection />
        </ColorProvider>
      </ColorModeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
