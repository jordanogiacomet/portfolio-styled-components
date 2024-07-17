import { screen } from '@testing-library/react';
import { EmaiLSection } from '.';
import '@testing-library/jest-dom/extend-expect';
import { renderTheme } from '../../styles/render-theme';

describe('<EmaiLSection />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<EmaiLSection />);
    expect(container).toMatchSnapshot();
  });

  it('should render heading', () => {
    renderTheme(<EmaiLSection />);
    const heading = screen.getByRole('heading', { name: "Let's connect" });
    expect(heading).toBeInTheDocument();
  });

  it('should render email input', () => {
    renderTheme(<EmaiLSection />);
    const emailInput = screen.getByPlaceholderText('user@example.com');
    expect(emailInput).toBeInTheDocument();
  });

  it('should render subject input', () => {
    renderTheme(<EmaiLSection />);
    const subjectInput = screen.getByPlaceholderText('Just saying hi');
    expect(subjectInput).toBeInTheDocument();
  });

  it('should render message textarea', () => {
    renderTheme(<EmaiLSection />);
    const messageTextArea = screen.getByPlaceholderText("Lets talk about...");
    expect(messageTextArea).toBeInTheDocument();
  });

  it('should render send button', () => {
    renderTheme(<EmaiLSection />);
    const sendButton = screen.getByRole('button', { name: 'Send Message' });
    expect(sendButton).toBeInTheDocument();
  });
  /*
  it('should render social links', () => {
    renderTheme(<EmaiLSection />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });
  */
});
