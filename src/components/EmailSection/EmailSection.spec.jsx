import { screen, fireEvent } from '@testing-library/react';
import { EmaiLSection } from '.';
import '@testing-library/jest-dom/extend-expect';
import { renderTheme } from '../../styles/render-theme';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';

describe('<EmaiLSection />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <EmaiLSection />
        </ColorProvider>
      </ColorModeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render heading', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <EmaiLSection />
        </ColorProvider>
      </ColorModeProvider>
    );
    const heading = screen.getByRole('heading', { name: "Let's connect" });
    expect(heading).toBeInTheDocument();
  });

  it('should render email input', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <EmaiLSection />
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
          <EmaiLSection />
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
          <EmaiLSection />
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
          <EmaiLSection />
        </ColorProvider>
      </ColorModeProvider>
    );
    const sendButton = screen.getByRole('button', { name: 'Enviar mensagem' });
    expect(sendButton).toBeInTheDocument();
  });

  it('should render send button with loading spinner', () => {
    renderTheme(
      <ColorModeProvider>
        <ColorProvider>
          <EmaiLSection />
        </ColorProvider>
      </ColorModeProvider>
    );
    const sendButton = screen.getByRole('button', { name: 'Enviar mensagem' });
    fireEvent.click(sendButton);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
