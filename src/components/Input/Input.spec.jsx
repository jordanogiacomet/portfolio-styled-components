import { Input } from '.';
import '@testing-library/jest-dom/extend-expect';
import { renderTheme } from '../../styles/render-theme';

describe('<Input />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Input name="email" type="email" id="email" required placeholder="user@example.com" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render input with correct props', () => {
    const { getByPlaceholderText } = renderTheme(
      <Input name="email" type="email" id="email" required placeholder="user@example.com" />,
    );
    const input = getByPlaceholderText('user@example.com');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'email');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('id', 'email');
    expect(input).toBeRequired();
  });
});
