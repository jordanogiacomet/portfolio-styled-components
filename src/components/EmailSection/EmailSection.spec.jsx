import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { EmailSection } from '.';
import '@testing-library/jest-dom/extend-expect';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';
import { LanguageProvider } from '../../contexts/LanguageContext'; // Certifique-se de que o LanguageProvider está importado

describe('<EmailSection />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <LanguageProvider>
            <EmailSection />
          </LanguageProvider>
        </ColorProvider>
      </ColorModeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render heading', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <LanguageProvider>
            <EmailSection />
          </LanguageProvider>
        </ColorProvider>
      </ColorModeProvider>
    );
    const heading = screen.getByRole('heading', { name: /connect|conectar/i });
    expect(heading).toBeInTheDocument();
  });

  it('should render email input', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <LanguageProvider>
            <EmailSection />
          </LanguageProvider>
        </ColorProvider>
      </ColorModeProvider>
    );
    const emailInput = screen.getByPlaceholderText('user@example.com');
    expect(emailInput).toBeInTheDocument();
  });

  it('should render subject input', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <LanguageProvider>
            <EmailSection />
          </LanguageProvider>
        </ColorProvider>
      </ColorModeProvider>
    );
    const subjectInput = screen.getByPlaceholderText('Just saying hi');
    expect(subjectInput).toBeInTheDocument();
  });

  it('should render message textarea', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <LanguageProvider>
            <EmailSection />
          </LanguageProvider>
        </ColorProvider>
      </ColorModeProvider>
    );
    const messageTextArea = screen.getByPlaceholderText('Lets talk about...');
    expect(messageTextArea).toBeInTheDocument();
  });

  it('should render send button', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <LanguageProvider>
            <EmailSection />
          </LanguageProvider>
        </ColorProvider>
      </ColorModeProvider>
    );
    const sendButton = screen.getByRole('button', { name: /send message|enviar mensagem/i });
    expect(sendButton).toBeInTheDocument();
  });
});
