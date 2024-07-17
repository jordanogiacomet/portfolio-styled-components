import { TextArea } from '.';
import '@testing-library/jest-dom/extend-expect';
import { renderTheme } from '../../styles/render-theme';

describe('<TextArea />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <TextArea name="message" id="message" placeholder="Let's talk about..." required />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render textarea with correct props', () => {
    const { getByPlaceholderText } = renderTheme(
      <TextArea name="message" id="message" placeholder="Let's talk about..." required />,
    );
    const textarea = getByPlaceholderText("Let's talk about...");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('name', 'message');
    expect(textarea).toHaveAttribute('id', 'message');
    expect(textarea).toBeRequired();
  });
});